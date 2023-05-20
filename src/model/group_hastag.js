const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return group_hastag.init(sequelize, DataTypes);
}

class group_hastag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    gr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'group',
        key: 'gr_id'
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
    tableName: 'group_hastag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gr_id" },
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
