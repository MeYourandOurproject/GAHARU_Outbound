const { Artikel } = require("../models");
const fs = require("fs");
const path = require("path");

class ArtikelController {
  static async create(req, res, next) {
    const { title, author, content } = req.body;
    try {
      const picturePaths = req.files
        ? req.files.map(
            (file) => `http://localhost:${process.env.PORT}/${file.path}`
            // (file) => `https://${process.env.HOST}/${file.path}`
          )
        : [];

      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Hapus karakter non-alphanumeric kecuali spasi & -
        .replace(/\s+/g, "-") // Ganti spasi dengan -
        .replace(/-+/g, "-"); // Hilangkan duplikasi -

      const thumbnail = picturePaths.length > 0 ? picturePaths[0] : null;

      const artikel = await Artikel.create({
        title,
        slug,
        thumbnail,
        author,
        content,
        picture: picturePaths,
      });

      res.status(201).json(artikel);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Artikel.findAll();

      // Ubah picture dari string JSON ke array jika tidak null
      const formattedData = data.map((artikel) => ({
        ...artikel.toJSON(),
        picture: artikel.picture ? JSON.parse(artikel.picture) : [],
      }));

      res.status(200).json(formattedData);
    } catch (err) {
      next(err);
    }
  }

  // static async getById(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const data = await Artikel.findOne({ where: { id } });

  //     if (!data) {
  //       throw { name: "ErrorNotFound" };
  //     }

  //     // Ubah picture dari string JSON ke array jika tidak null
  //     const formattedData = {
  //       ...data.toJSON(),
  //       picture: data.picture ? JSON.parse(data.picture) : [],
  //     };

  //     res.status(200).json(formattedData);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  static async getBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const data = await Artikel.findOne({ where: { slug } });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      // Ubah picture dari string JSON ke array jika tidak null
      const formattedData = {
        ...data.toJSON(),
        picture: data.picture ? JSON.parse(data.picture) : [],
      };

      res.status(200).json(formattedData);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { title, slug, author, content } = req.body;

    try {
      const picturePaths = req.files
        ? req.files.map(
            (file) => `http://localhost:${process.env.PORT}/${file.path}`
            // (file) => `https://${process.env.HOST}/${file.path}`
          )
        : [];

      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Hapus karakter non-alphanumeric kecuali spasi & -
        .replace(/\s+/g, "-") // Ganti spasi dengan -
        .replace(/-+/g, "-"); // Hilangkan duplikasi -

      if (!title || !author || !content) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const thumbnail = picturePaths.length > 0 ? picturePaths[0] : null;

      const [updateRowsCount] = await Artikel.update(
        {
          title,
          slug,
          thumbnail,
          author,
          content,
          picture: picturePaths,
        },
        { where: { id } }
      );
      if (updateRowsCount !== 1) {
        throw { name: "ErrorNotFound" };
      }
      const updateArtikel = await Artikel.findOne({ where: { id } });
      res.status(200).json(updateArtikel);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      // Ambil data artikel untuk mendapatkan path gambar
      const artikel = await Artikel.findOne({ where: { id } });
      if (!artikel) {
        throw { name: "ErrorNotFound" };
      }

      if (artikel.picture) {
        const pictures = Array.isArray(artikel.picture)
          ? artikel.picture
          : JSON.parse(artikel.picture);
        pictures.forEach((fileUrl) => {
          const filePath = path.join(
            __dirname,
            "..",
            // fileUrl.replace(`https://${process.env.HOST}/`, "") // deploy
            fileUrl.replace(`http://localhost:${process.env.PORT}/`, "") //local
          );
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath); // Hapus file gambar
          }
        });
      }

      await Artikel.destroy({ where: { id } });

      res.status(200).json({ message: "Artikel and images have been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ArtikelController;
