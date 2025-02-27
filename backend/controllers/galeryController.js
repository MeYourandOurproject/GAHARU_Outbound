const { Galery, Destination } = require("../models");

class GaleryController {
  static async create(req, res, next) {
    const { destination_id, title, costumer, description } = req.body;
    // const picturePath = `https://localhost:${process.env.PORT}/${req.file.path}`;
    const picturePath = `https://${process.env.HOST}/${req.file.path}`;

    try {
      const galery = await Galery.create({
        destination_id,
        title,
        picture: picturePath,
        costumer,
        description,
      });
      res.status(200).json(galery);
    } catch (err) {
      next(err);
      // console.log(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Galery.findAll({
        include: [{ model: Destination, attributes: ["nama", "alamat"] }],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Galery.findOne({
        where: { id },
        include: [{ model: Destination, attributes: ["nama", "alamat"] }],
      });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getByTitle(req, res, next) {
    try {
      const { title } = req.params;
      const data = await Galery.findOne({
        where: { title },
      });

      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { destination_id, title, costumer, description } = req.body;

    const picturePath = req.file
      ? `https://${process.env.HOST}/${req.file.path}`
      : null;

    if (
      !destination_id ||
      !title ||
      !costumer ||
      !description ||
      !picturePath
    ) {
      return res.status(400).json({ messag: "All fields are required" });
    }

    try {
      const [updateRowsCount] = await Galery.update(
        { destination_id, title, pictur: picturePath, costumer, description },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorNotFound" };
      }
      const updateGalery = await Galery.findOne({ where: { id } });
      res.status(200).json(updateGalery);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Galery.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Data has been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GaleryController;
