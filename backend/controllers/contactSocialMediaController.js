const { Contact_social_media } = require("../models");

class ContactSocialMediaController {
  static async getAll(req, res, next) {
    try {
      const data = await Contact_social_media.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ContactSocialMediaController;
