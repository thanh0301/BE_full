const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return status.init(sequelize, DataTypes);
}

class status extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status_type',
        key: 'type_id'
      }
    },
    gr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'group',
        key: 'gr_id'
      }
    }
  }, {
    sequelize,
    tableName: 'status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
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
