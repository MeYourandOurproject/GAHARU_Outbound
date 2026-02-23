const { Galery, Service } = require("../models");

const BASE_URL = process.env.BASE_URL;

class GaleryController {
  static async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 8;
      const offset = (page - 1) * limit;

      const sort = req.query.sort || "newest";

      let orderCondition =
        sort === "oldest" ? [["date", "ASC"]] : [["date", "DESC"]];

      const { count, rows } = await Galery.findAndCountAll({
        include: { model: Service, as: "services" },
        limit,
        offset,
        order: orderCondition,
      });

      res.status(200).json({
        totalData: count,
        totalPage: Math.ceil(count / limit),
        currentPage: page,
        perPage: limit,
        data: rows,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Galery.findOne({
        where: { id },
        include: [{ model: Service, as: "services" }],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const { title, description, service_id, location, date } = req.body;

      if (!title || !description || !service_id || !location || !date) {
        return res.status(400).json({
          message:
            "Title, Description, Service, Location and Date are required",
        });
      }

      const imgFiles = req.files?.img_url || [];
      const imgPaths = imgFiles.map(
        (file) => `${BASE_URL}/${file.path.replace(/\\/g, "/")}`,
      );

      const galery = await Galery.create({
        img_url: imgPaths,
        title,
        description,
        service_id,
        location,
        date,
      });

      res.status(201).json({
        message: "Galery created successfully",
        data: galery,
      });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, service_id, location, date } = req.body;

      const galery = await Galery.findByPk(id);

      if (!galery) {
        return res.status(404).json({
          message: "Galery not found",
        });
      }

      // ================= HANDLE IMAGE =================

      const imgFiles = req.files?.img_url || [];

      let imgPaths;

      if (imgFiles.length > 0) {
        // jika upload gambar baru
        imgPaths = imgFiles.map(
          (file) => `${BASE_URL}/${file.path.replace(/\\/g, "/")}`,
        );
      } else if (req.body.existingImages) {
        // jika tidak upload baru, pakai gambar lama
        imgPaths = JSON.parse(req.body.existingImages);
      } else {
        // fallback kalau tidak kirim apa2
        imgPaths = galery.img_url;
      }

      // ================= UPDATE DATA =================

      await galery.update({
        title: title ?? galery.title,
        description: description ?? galery.description,
        service_id: service_id ?? galery.service_id,
        location: location ?? galery.location,
        date: date ?? galery.date,
        img_url: imgPaths,
      });

      res.status(200).json({
        message: "Galery updated successfully",
        data: galery,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const galery = await Galery.findByPk(id);

      if (!galery) {
        return res.status(404).json({
          message: "Galery not found",
        });
      }

      await galery.destroy();

      res.status(200).json({
        message: "Galery deleted successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteImage(req, res, next) {
    try {
      const { id } = req.params;
      const { imageUrl } = req.body; // kirim URL yg mau dihapus

      const galery = await Galery.findByPk(id);

      if (!galery) {
        return res.status(404).json({
          message: "Galery not found",
        });
      }

      // parse JSON kalau masih string
      let images = galery.img_url;

      if (typeof images === "string") {
        images = JSON.parse(images);
      }

      // filter hapus image tertentu
      const updatedImages = images.filter((img) => img !== imageUrl);

      // kalau semua gambar terhapus?
      if (updatedImages.length === 0) {
        return res.status(400).json({
          message: "Cannot delete all images. At least one image required.",
        });
      }

      await galery.update({
        img_url: updatedImages,
      });

      res.status(200).json({
        message: "Image deleted successfully",
        data: galery,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GaleryController;
