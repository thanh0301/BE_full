const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return hastag.init(sequelize, DataTypes);
}

class hastag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hastag_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hastag_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hastag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hastag_id" },
        ]
      },
    ]
  });
  }
}
