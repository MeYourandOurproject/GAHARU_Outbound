const { Artikel, Category, User } = require("../models");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");

const BASE_URL = process.env.BASE_URL;

class ArtikelController {
  static async getAllAdmin(req, res, next) {
    try {
      const {
        search = "",
        page = 1,
        limit = 100,
        category_id,
        status,
      } = req.query;

      const offset = (page - 1) * limit;
      const where = {};

      if (search) {
        where[Op.or] = [
          { title: { [Op.like]: `%${search}%` } },
          { content: { [Op.like]: `%${search}%` } },
        ];
      }

      if (category_id) {
        where.category_id = category_id;
      }

      if (status) {
        where.status = status;
      }

      const result = await Artikel.findAndCountAll({
        where,

        include: [
          {
            model: Category,
            as: "category",
            attributes: ["id", "name"],
          },
          { model: User, as: "author", attributes: ["id", "name"] },
        ],
        limit: Number(limit),
        offset,
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json({
        data: result.rows,
        total: result.count,
        page: Number(page),
        totalPage: Math.ceil(result.count / limit),
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllPublic(req, res, next) {
    try {
      const { search = "", page = 1, limit = 10, category_id } = req.query;

      const offset = (page - 1) * limit;

      const where = {
        status: "published",
      };

      if (search) {
        where[Op.or] = [
          { title: { [Op.like]: `%${search}%` } },
          { content: { [Op.like]: `%${search}%` } },
          { picture: { [Op.like]: `%${search}%` } },
        ];
      }

      // 🔹 filter kategori (optional)
      if (category_id) {
        where.category_id = category_id;
      }

      const result = await Artikel.findAndCountAll({
        where,
        attributes: [
          "id",
          "title",
          "slug",
          "thumbnail",
          "createdAt",
          "updatedAt",
        ],
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["id", "name"],
          },
          { model: User, as: "author", attributes: ["id", "name"] },
        ],
        limit: Number(limit),
        offset,
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json({
        data: result.rows,
        total: result.count,
        page: Number(page),
        totalPage: Math.ceil(result.count / limit),
      });
    } catch (err) {
      next(err);
    }
  }

  static async getBySlugAdmin(req, res, next) {
    try {
      const { slug } = req.params;
      const data = await Artikel.findOne({
        where: { slug },
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["id", "name"],
          },
          { model: User, as: "author", attributes: ["id", "name"] },
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
      const data = await Artikel.findOne({
        where: { slug, status: "published" },
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["id", "name"],
          },
          { model: User, as: "author", attributes: ["id", "name"] },
        ],
      });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      // 🔹 Increment views setiap artikel dibuka
      await data.increment("views");
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const {
      title,
      excerpt,
      content,
      category_id,
      author_id,
      status,
      meta_title,
      meta_description,
    } = req.body;
    try {
      if (!title || !author_id || !content || !category_id) {
        return res.status(400).json({
          message: "Title, content, author_id, and category_id are required",
        });
      }

      // Thumbnail (single)
      const thumbnailFile = req.files?.thumbnail?.[0];
      const thumbnail = thumbnailFile
        ? `${BASE_URL}/${thumbnailFile.path}`
        : null;

      // Picture (array)
      const pictureFiles = req.files?.pictures || [];
      const picturePaths = pictureFiles.map(
        (file) => `${BASE_URL}/${file.path}`,
      );

      // Slug
      let slugBase = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      let slug = slugBase;
      let counter = 1;
      while (await Artikel.findOne({ where: { slug } })) {
        slug = `${slugBase}-${counter++}`;
      }

      let published_at = null;
      if (status === "published") published_at = new Date();

      const artikel = await Artikel.create({
        title,
        slug,
        excerpt,
        content,
        pictures: picturePaths,
        thumbnail,
        category_id,
        author_id,
        status: status || "idea",
        meta_title,
        meta_description,
        published_at,
      });
      res
        .status(201)
        .json({ message: "Artikel created successfully", data: artikel });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const {
      title,
      excerpt,
      content,
      category_id,
      author_id,
      status,
      meta_title,
      meta_description,
    } = req.body;

    try {
      const existingArtikel = await Artikel.findOne({ where: { id } });

      if (!existingArtikel) {
        return res.status(404).json({ message: "Artikel not found" });
      }

      // 🔹 Thumbnail (single) — hanya update kalau ada file baru
      const thumbnailFile = req.files?.thumbnail?.[0];
      let thumbnail = existingArtikel.thumbnail;
      if (thumbnailFile) {
        thumbnail = `${BASE_URL}/${thumbnailFile.path}`;
      }

      // Pictures (array)
      const pictureFiles = req.files?.pictures || [];
      let newPicturePaths = pictureFiles.map(
        (file) => `${BASE_URL}/${file.path}`,
      );

      let finalPictures = existingArtikel.pictures || [];

      // Hanya replace kalau ada upload baru
      if (newPicturePaths.length > 0) {
        finalPictures = newPicturePaths;
      }

      // Jika frontend mengirim string JSON, parse sekali saja
      if (typeof finalPictures === "string") {
        try {
          finalPictures = JSON.parse(finalPictures);
        } catch {
          finalPictures = [finalPictures];
        }
      }

      // 🔹 Slug baru kalau title berubah
      let slug = existingArtikel.slug;
      if (title && title !== existingArtikel.title) {
        let slugBase = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");

        slug = slugBase;
        let counter = 1;
        while (
          await Artikel.findOne({ where: { slug, id: { [Op.ne]: id } } })
        ) {
          slug = `${slugBase}-${counter++}`;
        }
      }

      // 🔹 Update published_at jika status berubah ke "published"
      let published_at = existingArtikel.published_at;
      if (status === "published" && !existingArtikel.published_at) {
        published_at = new Date();
      }

      // 🔹 Siapkan data update
      const updateData = {
        title: title || existingArtikel.title,
        slug,
        excerpt: excerpt || existingArtikel.excerpt,
        content: content || existingArtikel.content,
        thumbnail,
        pictures: finalPictures,
        category_id: category_id || existingArtikel.category_id,
        author_id: author_id || existingArtikel.author_id,
        status: status || existingArtikel.status,
        meta_title: meta_title || existingArtikel.meta_title,
        meta_description: meta_description || existingArtikel.meta_description,
        published_at,
      };

      await Artikel.update(updateData, { where: { id } });

      const updatedArtikel = await Artikel.findOne({ where: { id } });
      res.status(200).json({
        message: "Artikel updated successfully",
        data: updatedArtikel,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const artikel = await Artikel.findOne({ where: { id } });
      if (!artikel) {
        throw { name: "ErrorNotFound" };
      }

      // Hapus file gambar kalau ada
      if (artikel.pictures) {
        const pictures = Array.isArray(artikel.pictures)
          ? artikel.pictures
          : JSON.parse(artikel.pictures);

        await Promise.all(
          pictures.map(async (fileUrl) => {
            const filePath = path.join(
              __dirname,
              "..",
              path.normalize(fileUrl.replace(`${BASE_URL}/`, "")),
            );
            if (fs.existsSync(filePath)) await fs.promises.unlink(filePath);
          }),
        );
      }

      // Hapus artikel
      await Artikel.destroy({ where: { id } });

      res.status(200).json({ message: "Artikel and images have been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ArtikelController;
