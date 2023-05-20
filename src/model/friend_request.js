const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return friend_request.init(sequelize, DataTypes);
}

class friend_request extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    user_id_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    accepting: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'friend_request',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id_1" },
          { name: "user_id_2" },
        ]
      },
      {
        name: "user_id_2",
        using: "BTREE",
        fields: [
          { name: "user_id_2" },
        ]
      },
    ]
  });
  }
}
