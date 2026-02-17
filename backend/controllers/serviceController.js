const { Service, PriceList } = require("../models");
const { Op } = require("sequelize");
const BASE_URL = process.env.BASE_URL;

class ServiceController {
  static async getAllAdmin(req, res, next) {
    try {
      const data = await Service.findAll({
        include: { model: PriceList, as: "pricelist" },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getAllPublic(req, res, next) {
    try {
      const data = await Service.findAll({
        include: [
          {
            model: PriceList,
            as: "pricelist",
            where: { is_active: true },
            required: true,
          },
        ],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getBySlugAdmin(req, res, next) {
    try {
      const { slug } = req.params;
      const data = await Service.findOne({
        where: { slug },
        include: [
          {
            model: PriceList,
            as: "pricelist",
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
      const data = await Service.findOne({
        where: { slug },
        include: [
          {
            model: PriceList,
            as: "pricelist",
            where: { is_active: true },
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

  static async create(req, res, next) {
    const { name, description, meta_title, meta_description } = req.body;
    try {
      if (!name || !description || !meta_title || !meta_description) {
        return res.status(400).json({
          message: "all form are required",
        });
      }

      // Thumbnail (single)
      const imageFile = req.files?.image?.[0];
      const image = imageFile ? `${BASE_URL}/${imageFile.path}` : null;

      // Slug
      let slugBase = name
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      let slug = slugBase;
      let counter = 1;
      while (await Service.findOne({ where: { slug } })) {
        slug = `${slugBase}-${counter++}`;
      }

      const service = await Service.create({
        name,
        slug,
        description,
        image,
        meta_title,
        meta_description,
      });
      res
        .status(201)
        .json({ message: "Service created successfully", data: service });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { name, description, meta_title, meta_description } = req.body;

    try {
      const existingService = await Service.findOne({ where: { id } });

      if (!existingService) {
        return res.status(404).json({ message: "Service not found" });
      }

      // 🔹 Thumbnail (single) — hanya update kalau ada file baru
      const imageFile = req.files?.image?.[0];
      let image = existingService.image;
      if (imageFile) {
        image = `${BASE_URL}/${imageFile.path}`;
      }

      // 🔹 Slug baru kalau name berubah
      let slug = existingService.slug;
      if (name && name !== existingService.name) {
        let slugBase = name
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");

        slug = slugBase;
        let counter = 1;
        while (
          await Service.findOne({ where: { slug, id: { [Op.ne]: id } } })
        ) {
          slug = `${slugBase}-${counter++}`;
        }
      }

      // 🔹 Siapkan data update
      const updateData = {
        name,
        image: image || existingService.image,
        slug,
        description: description || existingService.description,
        image,
        meta_title: meta_title || existingService.meta_title,
        meta_description: meta_description || existingService.meta_description,
      };

      await Service.update(updateData, { where: { id } });

      const updatedService = await Service.findOne({ where: { id } });
      res.status(200).json({
        message: "Service updated successfully",
        data: updatedService,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Service.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { new: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Service Deleteed" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ServiceController;
