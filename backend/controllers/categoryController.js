const { Category, Artikel } = require("../models");

class CategoryController {
  // ADMIN
  static async getAllAdmin(req, res, next) {
    try {
      const data = await Category.findAll({
        include: { model: Artikel, as: "artikels" },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getAllPublic(req, res, next) {
    try {
      const data = await Category.findAll({
        include: [
          {
            model: Artikel,
            as: "artikels",
            attributes: ["id", "title", "slug", "status"],
            where: { status: "published" },
            required: true,
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { name, description, meta_title, meta_description } = req.body;
    try {
      const slug = name
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      const category = await Category.create({
        name,
        slug,
        description,
        meta_title,
        meta_description,
      });
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  }

  static async getBySlugAdmin(req, res, next) {
    try {
      const { slug } = req.params;
      const data = await Category.findOne({
        where: { slug },
        include: [
          {
            model: Artikel,
            as: "artikels",
            
          },
        ],
      });

      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getBySlugPublic(req, res, next) {
    try {
      const { slug } = req.params;
      const data = await Category.findOne({
        where: { slug },
        include: [
          {
            model: Artikel,
            as: "artikels",
            attributes: ["id", "title", "slug", "status"],
            where: { status: "published" },
            required: true,
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Category.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { new: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Category Deleteed" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
