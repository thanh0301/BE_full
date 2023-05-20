const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return group.init(sequelize, DataTypes);
}

class group extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    gr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gr_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gr_ava: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    gr_content: {
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
    tableName: 'group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gr_id" },
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
