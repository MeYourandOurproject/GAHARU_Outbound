const {
  Paket_tour,
  Destination,
  Price_list_1_day,
  Price_list_2_day_1_night,
} = require("../models");
// const upload = require("../config/multerConfig");

class PaketTourController {
  static async create(req, res, next) {
    const {
      name,
      price,
      country,
      city,
      destinations,
      // Bidang untuk Price_list_1_day
      _33_pax_1_day_executive,
      _50_pax_1_day_executive,
      _55_pax_1_day_executive,
      _33_pax_1_day_premium,
      _50_pax_1_day_premium,
      _55_pax_1_day_premium,
      _33_pax_1_day_students,
      _50_pax_1_day_students,
      _55_pax_1_day_students,
      // Bidang untuk Price_list_2_day_1_night
      _33_pax_2_day_1_night_executive,
      _50_pax_2_day_1_night_executive,
      _56_pax_2_day_1_night_executive,
      _33_pax_2_day_1_night_premium,
      _50_pax_2_day_1_night_premium,
      _56_pax_2_day_1_night_premium,
      _33_pax_2_day_1_night_students,
      _50_pax_2_day_1_night_students,
      _56_pax_2_day_1_night_students,
    } = req.body;

    const upperCaseName = name.toUpperCase();
    // Generate slug from name
    const slug = name.toLowerCase().replace(/ /g, "-");
    const picturePath = `http://localhost:${process.env.PORT}/${req.file.path}`;

    try {
      const paket_tour = await Paket_tour.create({
        name: upperCaseName,
        slug,
        picture: picturePath,
        price,
        country,
        city,
      });

      const parsedDestinations = JSON.parse(destinations);

      const destinationPromises = parsedDestinations.map((destination) => {
        return Destination.create({
          paket_tour_id: paket_tour.id,
          nama: destination.nama,
          alamat: destination.alamat,
        });
      });

      const destinationResults = await Promise.all(destinationPromises);

      // PL 1 day
      const priceList1DayExecutive = await Price_list_1_day.create({
        paket_tour_id: paket_tour.id,
        package: "Executive",
        _33_pax: _33_pax_1_day_executive,
        _50_pax: _50_pax_1_day_executive,
        _55_pax: _55_pax_1_day_executive,
      });

      const priceList1DayPremium = await Price_list_1_day.create({
        paket_tour_id: paket_tour.id,
        package: "Premium",
        _33_pax: _33_pax_1_day_premium,
        _50_pax: _50_pax_1_day_premium,
        _55_pax: _55_pax_1_day_premium,
      });

      const priceList1DayStudent = await Price_list_1_day.create({
        paket_tour_id: paket_tour.id,
        package: "Students",
        _33_pax: _33_pax_1_day_students,
        _50_pax: _50_pax_1_day_students,
        _55_pax: _55_pax_1_day_students,
      });

      // PL 2 day 1 night
      const priceList2Day1NightExecutive =
        await Price_list_2_day_1_night.create({
          paket_tour_id: paket_tour.id,
          package: "Executive",
          _33_pax: _33_pax_2_day_1_night_executive,
          _50_pax: _50_pax_2_day_1_night_executive,
          _56_pax: _56_pax_2_day_1_night_executive,
        });

      const priceList2Day1NightPremium = await Price_list_2_day_1_night.create({
        paket_tour_id: paket_tour.id,
        package: "Premium",
        _33_pax: _33_pax_2_day_1_night_premium,
        _50_pax: _50_pax_2_day_1_night_premium,
        _56_pax: _56_pax_2_day_1_night_premium,
      });

      const priceList2Day1NightStudent = await Price_list_2_day_1_night.create({
        paket_tour_id: paket_tour.id,
        package: "Students",
        _33_pax: _33_pax_2_day_1_night_students,
        _50_pax: _50_pax_2_day_1_night_students,
        _56_pax: _56_pax_2_day_1_night_students,
      });

      res.status(201).json({
        paket_tour,
        destinations: destinationResults,
        priceLists: {
          oneDay: [
            priceList1DayExecutive,
            priceList1DayPremium,
            priceList1DayStudent,
          ],
          twoDayOneNight: [
            priceList2Day1NightExecutive,
            priceList2Day1NightPremium,
            priceList2Day1NightStudent,
          ],
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await Paket_tour.findAll({
        include: [
          { model: Destination, attributes: ["nama", "alamat"] },
          {
            model: Price_list_1_day,
            attributes: {
              exclude: ["id", "paket_tour_id", "createdAt", "updatedAt"],
            },
          },
          {
            model: Price_list_2_day_1_night,
            attributes: {
              exclude: ["id", "paket_tour_id", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Paket_tour.findOne({
        where: { id },
        include: [
          { model: Destination, attributes: ["nama", "alamat"] },
          {
            model: Price_list_1_day,
            attributes: {
              exclude: ["id", "paket_tour_id", "createdAt", "updatedAt"],
            },
          },
          {
            model: Price_list_2_day_1_night,
            attributes: {
              exclude: ["id", "paket_tour_id", "createdAt", "updatedAt"],
            },
          },
        ],
        attributes: { exclude: ["id", "createdAt", "updatedAt"] },
      });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      // console.log(req.params);
      const data = await Paket_tour.findOne({
        where: { slug },
        include: [
          { model: Destination, attributes: ["nama", "alamat"] },
          {
            model: Price_list_1_day,
            attributes: {
              exclude: ["id", "paket_tour_id", "createdAt", "updatedAt"],
            },
          },
          {
            model: Price_list_2_day_1_night,
            attributes: {
              exclude: ["id", "paket_tour_id", "createdAt", "updatedAt"],
            },
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const {
      name,
      price,
      country,
      city,
      destinations,
      // Bidang untuk Price_list_1_day
      _33_pax_1_day_executive,
      _50_pax_1_day_executive,
      _55_pax_1_day_executive,
      _33_pax_1_day_premium,
      _50_pax_1_day_premium,
      _55_pax_1_day_premium,
      _33_pax_1_day_students,
      _50_pax_1_day_students,
      _55_pax_1_day_students,
      // Bidang untuk Price_list_2_day_1_night
      _33_pax_2_day_1_night_executive,
      _50_pax_2_day_1_night_executive,
      _56_pax_2_day_1_night_executive,
      _33_pax_2_day_1_night_premium,
      _50_pax_2_day_1_night_premium,
      _56_pax_2_day_1_night_premium,
      _33_pax_2_day_1_night_students,
      _50_pax_2_day_1_night_students,
      _56_pax_2_day_1_night_students,
    } = req.body;

    const picturePath = req.file
      ? `http://localhost:${process.env.PORT}/${req.file.path}`
      : null;

    try {
      const paket_tour = await Paket_tour.findByPk(id);
      if (!paket_tour) {
        return res.status(404).json({ message: "Paket_tour not found" });
      }

      // Update Paket_tour
      await paket_tour.update({
        name: name || paket_tour.name,
        picture: picturePath || paket_tour.picture,
        price: price || paket_tour.price,
        country: country || paket_tour.country,
        city: city || paket_tour.city,
      });

      // Update Destinations
      if (destinations) {
        const parsedDestinations = JSON.parse(destinations);

        // Hapus destinations lama
        await Destination.destroy({ where: { paket_tour_id: paket_tour.id } });

        // Tambahkan destinations baru
        const destinationPromises = parsedDestinations.map((destination) => {
          return Destination.create({
            paket_tour_id: paket_tour.id,
            nama: destination.nama,
            alamat: destination.alamat,
          });
        });

        await Promise.all(destinationPromises);
      }

      // Update Price_list_1_day
      await Price_list_1_day.destroy({
        where: { paket_tour_id: paket_tour.id },
      });

      await Price_list_1_day.bulkCreate([
        {
          paket_tour_id: paket_tour.id,
          package: "Executive",
          _33_pax: _33_pax_1_day_executive,
          _50_pax: _50_pax_1_day_executive,
          _55_pax: _55_pax_1_day_executive,
        },
        {
          paket_tour_id: paket_tour.id,
          package: "Premium",
          _33_pax: _33_pax_1_day_premium,
          _50_pax: _50_pax_1_day_premium,
          _55_pax: _55_pax_1_day_premium,
        },
        {
          paket_tour_id: paket_tour.id,
          package: "Students",
          _33_pax: _33_pax_1_day_students,
          _50_pax: _50_pax_1_day_students,
          _55_pax: _55_pax_1_day_students,
        },
      ]);

      // Update Price_list_2_day_1_night
      await Price_list_2_day_1_night.destroy({
        where: { paket_tour_id: paket_tour.id },
      });

      await Price_list_2_day_1_night.bulkCreate([
        {
          paket_tour_id: paket_tour.id,
          package: "Executive",
          _33_pax: _33_pax_2_day_1_night_executive,
          _50_pax: _50_pax_2_day_1_night_executive,
          _56_pax: _56_pax_2_day_1_night_executive,
        },
        {
          paket_tour_id: paket_tour.id,
          package: "Premium",
          _33_pax: _33_pax_2_day_1_night_premium,
          _50_pax: _50_pax_2_day_1_night_premium,
          _56_pax: _56_pax_2_day_1_night_premium,
        },
        {
          paket_tour_id: paket_tour.id,
          package: "Students",
          _33_pax: _33_pax_2_day_1_night_students,
          _50_pax: _50_pax_2_day_1_night_students,
          _56_pax: _56_pax_2_day_1_night_students,
        },
      ]);

      res.status(200).json({ message: "Paket_tour updated successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      // Find the Paket_tour
      const paket_tour = await Paket_tour.findByPk(id);

      if (!paket_tour) {
        return res.status(404).json({ message: "Paket_tour not found" });
      }

      // Delete related destinations
      await Destination.destroy({
        where: { paket_tour_id: id },
      });

      // Delete related price lists
      await Price_list_1_day.destroy({
        where: { paket_tour_id: id },
      });

      await Price_list_2_day_1_night.destroy({
        where: { paket_tour_id: id },
      });

      // Delete the Paket_tour
      await paket_tour.destroy();

      res
        .status(200)
        .json({ message: "Paket_tour and related data deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PaketTourController;
