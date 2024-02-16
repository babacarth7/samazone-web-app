import { getToken } from "next-auth/jwt";
import User from "../../../../models/User";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || !user.isAdmin) {
    return res.status(401).send("admin signin required");
  }

  if (req.method === "DELETE") {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

const deleteHandler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    if (user.email === "babacar@admin.com") {
      return res.status(400).send({ message: "Can not delete admin" });
    }
    await user.deleteOne();
    await db.disconnect();
    res.send({ message: "User deleted" });
  } else {
    await db.disconnect();
    res.send(404).send({ message: "User not found" });
  }
}

export default handler;
