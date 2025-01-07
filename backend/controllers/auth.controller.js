import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const hashPassword = async (password) => {
  try {
    const salt = 10;
    const hashedPass = await bcryptjs.hash(password, salt);
    return hashedPass;
  } catch (error) {
    throw new Error(error);
  }
};

export const signup = async (req, res, next) => {
  //Get the data of user
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    //Hash Password
    const hashedPassword = await hashPassword(password);

    const createNewUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await createNewUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check the password is correct or not
  try {
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //Create a token
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const { password: pass, ...rest } = user._doc;

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
