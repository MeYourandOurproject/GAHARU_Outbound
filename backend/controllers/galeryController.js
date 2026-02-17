const { Galery, Service } = require("../models");

const BASE_URL = process.env.BASE_URL;

class GaleryController {
  static async getAll(req, res, next) {
    try {
      const data = await Galery.findAll({
        include: { model: Service, as: "services" },
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
