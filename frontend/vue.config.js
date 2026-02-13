const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title =
        "GAHARU Outbound | Outbond, Rafting, Jeep Offroad, Outdoor Activity"; // Ganti title di sini
      return args;
    });
  },
});
