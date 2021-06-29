const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },

    url: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
      defaultValue: 49,
    },

    description: {
      type: DataTypes.STRING,
    },
  });

  SequelizeSlugify.slugifyModel(Product, {
    source: ["name"],
  });
  
  
  Product.associate = (models) => {
    models.Service.hasMany(Product, { foreignKey: "serviceId" });
    Product.belongsTo(models.Service, { foreignKey: "serviceId" });
  };


  return Product;
};
