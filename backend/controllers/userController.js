const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static async create(req, res, next) {
    try {
      const { firstname, lastname, role, username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        role,
        username,
        email,
        password: hashedPassword,
      });
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "InvalidCredential" };
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw { name: "InvalidCredential" };
      }
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await User.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await User.findOne({ where: { id } });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { firstname, lastname, role, username, email, password } = req.body;

      if (
        !id ||
        !firstname ||
        !lastname ||
        !role ||
        !username ||
        !email ||
        !password
      ) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const [updateRowsCount] = await User.update(
        {
          firstname,
          lastname,
          role,
          username,
          email,
          password: hashedPassword,
        },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorUpdate" };
      }
      const updatedUser = await User.findOne({ where: { id } });
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await User.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "User Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
