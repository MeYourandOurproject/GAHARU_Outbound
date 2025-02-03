const { Funactivity } = require("../models");

class FunactivityController {
  static async getAll(req, res, next) {
    try {
      const data = await Funactivity.findAll();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FunactivityController;
