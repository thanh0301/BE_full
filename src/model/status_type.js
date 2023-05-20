const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return status_type.init(sequelize, DataTypes);
}

class status_type extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'status_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
  }
}
