const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return admin.init(sequelize, DataTypes);
}

class admin extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    account: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account" },
        ]
      },
    ]
  });
  }
}
