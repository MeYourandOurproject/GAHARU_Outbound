const { Social_media, Contact_social_media } = require("../models");

class SocialMediaController {
  static async create(req, res, next) {
    try {
      const { nama, link } = req.body;
      const social_media = await Social_media.create({ nama, link });
      res.status(200).json(social_media);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Social_media.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Social_media.findOne({ where: { id } });
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
      const { nama, link } = req.body;

      if (!nama || !link) {
        res.status(400).json({ message: "All fields are required" });
      }

      const [updateRowsCount] = await Social_media.update(
        { nama, link },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorUpdate" };
      }
      const updateSocial_media = await Social_media.findOne({
        where: { id },
      });
      res.status(200).json(updateSocial_media);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Social_media.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Data Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SocialMediaController;
