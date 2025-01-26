const { Company_profile } = require("../models");

class Company_ProfileConteoller {
  static async create(req, res, next) {
    try {
      const { name, address, founded_year, description } = req.body;
      const company_profile = await Company_profile.create({
        name,
        address,
        founded_year,
        description,
      });
      res.status(200).json(company_profile);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Company_profile.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Company_profile.findOne({ where: { id } });
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
      const { name, address, founded_year, description } = req.body;

      if (!name || !address || !founded_year || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const [updateRowsCount] = await Company_profile.update(
        {
          name,
          address,
          founded_year,
          description,
        },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorUpdate" };
      }
      const updateCompany_profile = await Company_profile.findOne({
        where: { id },
      });
      res.status(200).json(updateCompany_profile);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Company_profile.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Data Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Company_ProfileConteoller;
