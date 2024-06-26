import { getToken } from "next-auth/jwt";
import Order from "../../../models/Order";
import Product from "../../../models/Product";
import User from "../../../models/User";
import db from "../../../utils/db";

const hanlder = async (req, res) => {
  const user = await getToken({ req });
  if (!user && !user.isAdmin) {
    return res.status(401).send("signin required");
  }

  await db.connect();

  const ordersCount = await Order.countDocuments();
  const productsCount = await Product.countDocuments();
  const usersCount = await User.countDocuments();

  const ordersPriceGroup = await Order.aggregate([
    {
      $group: {
        _id: null,
        sales: { $sum: "$totalPrice" },
      },
    },
  ]);

  const ordersPrice =
    ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;

  const salesData = await Order.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        totalSales: { $sum: "$totalPrice" },
      },
    },
  ]);

  await db.disconnect();
  res.send({ ordersCount, productsCount, usersCount, ordersPrice, salesData });
};

export default hanlder;
