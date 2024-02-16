import { getToken } from "next-auth/jwt";
import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user && !user.isAdmin) {
    return res.status(401).send("signin required");
  }

  if (req.method === 'GET') {
    return getHandler(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
}

export default handler;