import { getToken } from "next-auth/jwt";
import db from "../../../../utils/db";
import Order from "../../../../models/Order";

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user) {
    return res.status(401).send("signin required");
  }

  await db.connect();

  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
};

export default handler;
