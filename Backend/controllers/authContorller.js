const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body)

    if (!name) return res.status(400).json({ message: "Name is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });

    const findEmail = await prisma.user.findUnique({ where: { email } });
    if (findEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    if (newUser) {
      return res
        .status(201)
        .json({ message: "Register Success", success: true });
    }
    return res.status(400).json({ message: "Register failed", success: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  register,
};
