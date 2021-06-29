module.exports = (sequelize, DataTypes) => {
    const SequelizeSlugify = require("sequelize-slugify");
    const Service = sequelize.define("Service", {
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    });
    SequelizeSlugify.slugifyModel(Service, {
        source: ["name"],
      });
    return Service;
  };