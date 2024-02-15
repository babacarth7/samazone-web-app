import User from "../../models/User";
import Product from "../../models/Product";
import data from "../../utils/data";
import db from "../../utils/db";

const handler = async (req, res) => {
  db.connect();
  try {
    await User.deleteMany();
    await User.insertMany(data.users);
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();
    res.send({ message: "Seeded successfully" });
  } catch (error) {
    console.error("Seeding error:", error);
    res
      .status(500)
      .send({ message: "Error seeding data", error: error.message });
  }
};

export default handler;
