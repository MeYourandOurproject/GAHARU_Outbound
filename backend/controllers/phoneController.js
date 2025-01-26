const { Phone } = require("../models");

class PhoneController {
  static async create(req, res, next) {
    try {
      const { contact_id, nama, phone } = req.body;
      const phones = await Phone.create({ contact_id, nama, phone });
      res.status(200).json(phones);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Phone.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Phone.findOne({ where: { id } });
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
      const { contact_id, nama, phone } = req.body;
      if (!contact_id || !nama || !phone) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const [updateRowsCount] = await Phone.update(
        { contact_id, nama, phone },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorUpdate" };
      }
      const updatedPhone = await Phone.findOne({ where: { id } });
      res.status(200).json(updatedPhone);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Phone.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Data has been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PhoneController;
