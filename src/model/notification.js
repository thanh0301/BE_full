const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return notification.init(sequelize, DataTypes);
}

class notification extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    noti_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    noti_tittle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    noti_content: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'notification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "noti_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
