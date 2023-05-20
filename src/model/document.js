const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return document.init(sequelize, DataTypes);
}

class document extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    doc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_name: {
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
    tableName: 'document',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doc_id" },
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
