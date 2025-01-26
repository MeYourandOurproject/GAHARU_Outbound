const { Legalitas } = require("../models");

class LegalitasController {
  static async create(req, res, next) {
    try {
      const { nama, data } = req.body;
      const legalitas = await Legalitas.create({
        nama,
        data,
      });
      res.status(200).json(legalitas);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Legalitas.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Legalitas.findOne({ where: { id } });
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
      const { nama, data } = req.body;
      if (!nama || !data) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const [updateRowsCount] = await Legalitas.update(
        { nama, data },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorUpdate" };
      }
      const updateLegalitas = await Legalitas.findOne({ where: { id } });
      res.status(200).json(updateLegalitas);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Legalitas.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Data Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = LegalitasController;
