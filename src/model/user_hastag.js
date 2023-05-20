const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user_hastag.init(sequelize, DataTypes);
}

class user_hastag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
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
    tableName: 'user_hastag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
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
