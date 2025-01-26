const { Contact, Phone, Social_media } = require("../models");

class ContactController {
  static async create(req, res, next) {
    try {
      const { email, website } = req.body;
      const contact = await Contact.create({ email, website });
      res.status(200).json(contact);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Contact.findAll({
        include: [
          { model: Phone, attributes: ["nama", "phone"] },
          {
            model: Social_media,
            attributes: ["nama", "link"],
            through: { attributes: [] },
          },
        ],

        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Contact.findOne({
        where: { id },
        include: [
          { model: Phone, attributes: ["nama", "phone"] },
          {
            model: Social_media,
            attributes: ["nama", "link"],
            through: { attributes: [] },
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  //   static async update(req, res, next) {
  //     try {
  //       const { id } = req.params;
  //       const
  //     } catch (err) {
  //       next(err);
  //     }
  //   }
}

module.exports = ContactController;
