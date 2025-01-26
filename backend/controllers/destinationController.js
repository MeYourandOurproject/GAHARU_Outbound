const { Destination, Paket_tour } = require("../models");

class DestinationController {
  static async create(req, res, next) {
    try {
      const { paket_tour_id, nama, alamat } = req.body;

      if (!paket_tour_id || !nama || !alamat) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const paket_tour = await Paket_tour.findOne({ where: paket_tour_id });

      if (!paket_tour) {
        return res
          .status(400)
          .json({ message: "Tidak ada paket tour dengan id tersebut" });
      }
      // Membuat destinasi baru
      const destination = await Destination.create({
        paket_tour_id,
        nama,
        alamat,
      });

      // Mengambil semua destinasi yang terkait dengan paket_tour_id yang diberikan
      const data = await Destination.findAll({ where: { paket_tour_id } });

      // Mengembalikan respons dengan data destinasi yang baru dibuat dan semua destinasi terkait
      res.status(200).json({ data, newDestination: destination });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Destination.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getByPaketTourId(req, res, next) {
    try {
      const { paket_tour_id } = req.params;
      const data = await Destination.findAll({ where: { paket_tour_id } });
      if (!data) {
        throw { message: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { paket_tour_id, nama, alamat } = req.body;

      console.log(id, paket_tour_id, nama, alamat);

      if (!paket_tour_id || !nama || !alamat) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const destination = await Destination.findOne({ where: { id } });
      if (!destination) {
        return res
          .status(400)
          .json({ message: "Tidak ada destinasi dengan id tersebut" });
      }

      const [updateRowsCount] = await Destination.update(
        {
          paket_tour_id,
          nama,
          alamat,
        },
        { where: { id } }
      );

      if (updateRowsCount !== 1) {
        throw { name: "ErrorUpdate" };
      }

      const updatedDestination = await Destination.findOne({ where: { id } });
      res.status(200).json(updatedDestination);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRowsCount = await Destination.destroy({ where: { id } });
      if (deleteRowsCount === 0) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json({ message: "Destination Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = DestinationController;
