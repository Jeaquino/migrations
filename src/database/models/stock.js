'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product,{as:"products"});
      this.belongsTo(models.Size,{as:"sizes"});
      this.belongsTo(models.Color,{as:"colors"});
    }
  }
  Stock.init({
    product_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};