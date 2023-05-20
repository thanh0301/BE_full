const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return image.init(sequelize, DataTypes);
}

class image extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    img_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    }
  }, {
    sequelize,
    tableName: 'image',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "img_id" },
        ]
      },
      {
        name: "status_id",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
  }
}
