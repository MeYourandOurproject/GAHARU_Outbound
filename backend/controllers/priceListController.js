const { PriceList, Service } = require("../models");

const { Op } = require("sequelize");
const BASE_URL = process.env.BASE_URL;

class PriceListController {
  static async getAllAdmin(req, res, next) {
    try {
      const data = await PriceList.findAll({
        include: { model: Service, as: "service" },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getAllPublic(req, res, next) {
    try {
      const data = await PriceList.findAll({
        where: { is_active: true },
        include: [
          {
            model: Service,
            as: "service",
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
      const data = await PriceList.findOne({
        where: { slug },
        include: [
          {
            model: Service,
            as: "service",
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
      const data = await PriceList.findOne({
        where: { slug, is_active: true },
        include: [
          {
            model: Service,
            as: "service",
            required: true,
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

  static async create(req, res, next) {
    try {
      const {
        service_id,
        title,
        price,
        unit,
        duration,
        facilities,
        description,
        meta_title,
        meta_description,
        is_featured,
        is_active,
      } = req.body;

      // 🔥 VALIDASI WAJIB
      if (!title || !price) {
        return res.status(400).json({
          message: "Title and price are required",
        });
      }

      // 🔥 HANDLE IMAGE
      const imageFile = req.files?.image?.[0];
      const image = imageFile ? `${BASE_URL}/${imageFile.path}` : null;

      // 🔥 SLUG GENERATOR (UNIQUE)
      let slugBase = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      let slug = slugBase;
      let counter = 1;

      while (await PriceList.findOne({ where: { slug } })) {
        slug = `${slugBase}-${counter++}`;
      }

      // 🔥 HANDLE FACILITIES (JSON)
      let parsedFacilities = null;

      if (facilities) {
        if (typeof facilities === "string") {
          try {
            parsedFacilities = JSON.parse(facilities);
          } catch {
            parsedFacilities = [facilities];
          }
        } else {
          parsedFacilities = facilities;
        }
      }

      const priceList = await PriceList.create({
        service_id,
        title,
        slug,
        price,
        unit,
        duration,
        facilities: parsedFacilities,
        description,
        image,
        meta_title,
        meta_description,
        is_featured: is_featured === "true" || is_featured === true,
        is_active: is_active === "false" ? false : true,
      });

      res.status(201).json({
        message: "Price list created successfully",
        data: priceList,
      });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;

      const {
        service_id,
        title,
        price,
        unit,
        duration,
        facilities,
        description,
        meta_title,
        meta_description,
        is_featured,
        is_active,
      } = req.body;

      const existingPrice = await PriceList.findOne({ where: { id } });

      if (!existingPrice) {
        return res.status(404).json({
          message: "Price list not found",
        });
      }

      // ================= IMAGE =================
      const imageFile = req.files?.image?.[0];
      let image = existingPrice.image;

      if (imageFile) {
        image = `${BASE_URL}/${imageFile.path.replace(/\\/g, "/")}`;
      }

      // ================= SLUG =================
      let slug = existingPrice.slug;

      if (title && title !== existingPrice.title) {
        let slugBase = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");

        slug = slugBase;
        let counter = 1;

        while (
          await PriceList.findOne({
            where: { slug, id: { [Op.ne]: id } },
          })
        ) {
          slug = `${slugBase}-${counter++}`;
        }
      }

      // ================= FACILITIES FIX =================
      let parsedFacilities = existingPrice.facilities;

      if (facilities !== undefined) {
        if (Array.isArray(facilities)) {
          parsedFacilities = facilities;
        } else if (typeof facilities === "string") {
          try {
            const temp = JSON.parse(facilities);
            parsedFacilities = Array.isArray(temp) ? temp : [temp];
          } catch {
            parsedFacilities = [facilities];
          }
        }
      }

      // ================= UPDATE =================
      const updateData = {
        service_id: service_id ?? existingPrice.service_id,
        title: title ?? existingPrice.title,
        slug,
        price: price ?? existingPrice.price,
        unit: unit ?? existingPrice.unit,
        duration: duration ?? existingPrice.duration,
        facilities: parsedFacilities,
        description: description ?? existingPrice.description,
        image,
        meta_title: meta_title ?? existingPrice.meta_title,
        meta_description: meta_description ?? existingPrice.meta_description,
        is_featured:
          is_featured !== undefined
            ? is_featured === "true" || is_featured === true
            : existingPrice.is_featured,
        is_active:
          is_active !== undefined
            ? is_active === "true" || is_active === true
            : existingPrice.is_active,
      };

      await existingPrice.update(updateData);

      res.status(200).json({
        message: "Price list updated successfully",
        data: existingPrice,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await PriceList.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { new: "ErrorNotFound" };
      }
      res.status(200).json({ message: "PriceList Deleteed" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PriceListController;
