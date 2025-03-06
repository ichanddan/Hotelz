const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) return res.status(400).json({ message: "Name is require" });
    if (!email) return res.status(400).json({ message: "Email is require" });
    if (!password)
      return res.status(400).json({ message: "Password is require" });

    const register = prisma.user.create({ name, email, password });
    if (register) {
      return res
        .status(200)
        .json({ message: "Register Success", success: true });
    }
    return res.status(400).json({ message: "Register failed", success: false });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};


module.exports ={
    register
}