"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Company_profiles", [
      {
        name: "Pesona Linggarjati",
        address:
          "Jl. Desa Manis Kidul (RM. Dapoer Bayem) Kec. Jalaksana Kab. Kuningan - JABAR",
        founded_year: 2016,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente hic maxime tempore quibusdam quam odit, voluptas dignissimos velit nihil, vitae nesciunt officia incidunt repellat. Iure odit sit vel magni veritatis, nulla praesentium laboriosam culpa error fuga inventore vitae quis reiciendis ut consequuntur. Quidem incidunt excepturi a maiores modi facilis fugiat quo, esse illum quis sit facere perferendis molestiae atque totam sapiente sint voluptatum distinctio rem commodi in minima cum asperiores? Possimus similique quam iusto ratione labore molestias ea quidem beatae. Eaque ad, reprehenderit molestias quam amet aperiam dignissimos ipsam officiis hic! Eaque id laudantium velit, ex vel asperiores eligendi quod, dolores provident rerum nobis! Quo porro cumque voluptate ratione vel. Distinctio officiis reprehenderit libero, consequatur deleniti doloribus vitae unde, accusamus eum dolores debitis molestiae dolore. Praesentium optio sint neque assumenda veniam modi suscipit, asperiores adipisci est, harum ab architecto veritatis! Nesciunt, alias deleniti accusamus atque ipsum consectetur quis! Ducimus tempore deserunt aut ea voluptates sint, blanditiis nesciunt earum quibusdam provident architecto recusandae. Aliquam illum consectetur voluptatum, corrupti labore neque magnam architecto! Ut eos eius, totam quia dolore provident labore vel sint reiciendis qui eveniet sapiente esse cupiditate cum sed nam ipsam enim exercitationem voluptate. In ratione ipsam numquam rerum ullam consectetur animi. Eos numquam perferendis ratione aliquam nostrum cum voluptatem alias porro tempore velit sint officiis minus, unde molestiae ut ad. Id enim provident, accusantium dicta a veniam odit fugiat ea magnam sunt vero consectetur qui. Dicta modi autem suscipit commodi minus eligendi quae! Sint neque iure tenetur alias quas, consequatur accusantium culpa amet reprehenderit temporibus rem magnam aperiam voluptatem ut at unde molestias accusamus omnis distinctio nihil harum voluptas illum ad. Saepe eveniet, blanditiis nisi doloribus in praesentium nam magni quis deleniti. Exercitationem aut facilis recusandae odio doloremque vero quo, saepe ab aliquam asperiores incidunt molestias, fugiat optio.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Company_profiles", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
