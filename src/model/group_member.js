const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return group_member.init(sequelize, DataTypes);
}

class group_member extends Sequelize.Model {
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
    gr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'group',
        key: 'gr_id'
      }
    }
  }, {
    sequelize,
    tableName: 'group_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "gr_id" },
        ]
      },
      {
        name: "gr_id",
        using: "BTREE",
        fields: [
          { name: "gr_id" },
        ]
      },
    ]
  });
  }
}
