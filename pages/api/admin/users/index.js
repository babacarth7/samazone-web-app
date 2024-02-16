import { getToken } from "next-auth/jwt";
import User from "../../../../models/User";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user && !user.isAdmin) {
    return res.status(401).send("signin required");
  }
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.send(users);
};

export default handler;
