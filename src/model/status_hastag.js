const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return status_hastag.init(sequelize, DataTypes);
}

class status_hastag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    hastag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hastag',
        key: 'hastag_id'
      }
    }
  }, {
    sequelize,
    tableName: 'status_hastag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
          { name: "hastag_id" },
        ]
      },
      {
        name: "hastag_id",
        using: "BTREE",
        fields: [
          { name: "hastag_id" },
        ]
      },
    ]
  });
  }
}
