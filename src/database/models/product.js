'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Image,{as:"images",foreignKey:'image_id'});
      this.hasMany(models.Item,{as:"items",foreignKey:'product_id'});
      this.belongsTo(models.Category,{as:"categories",foreignKey:'category_id'})
      this.belongsToMany(models.Size,{ through: models.Stock, as: 'products', foreignKey:'product_id',otherKey:'size_id'});
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    timestamps:true
  });
  return Product;
};