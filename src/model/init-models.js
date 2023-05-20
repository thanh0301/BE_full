const DataTypes = require("sequelize").DataTypes;
const _admin = require("./admin");
const _comment = require("./comment");
const _document = require("./document");
const _friend_request = require("./friend_request");
const _group = require("./group");
const _group_hastag = require("./group_hastag");
const _group_member = require("./group_member");
const _hastag = require("./hastag");
const _image = require("./image");
const _like = require("./like");
const _notification = require("./notification");
const _report = require("./report");
const _status = require("./status");
const _status_hastag = require("./status_hastag");
const _status_type = require("./status_type");
const _user = require("./user");
const _user_hastag = require("./user_hastag");
const _video = require("./video");

function initModels(sequelize) {
  const admin = _admin(sequelize, DataTypes);
  const comment = _comment(sequelize, DataTypes);
  const document = _document(sequelize, DataTypes);
  const friend_request = _friend_request(sequelize, DataTypes);
  const group = _group(sequelize, DataTypes);
  const group_hastag = _group_hastag(sequelize, DataTypes);
  const group_member = _group_member(sequelize, DataTypes);
  const hastag = _hastag(sequelize, DataTypes);
  const image = _image(sequelize, DataTypes);
  const like = _like(sequelize, DataTypes);
  const notification = _notification(sequelize, DataTypes);
  const report = _report(sequelize, DataTypes);
  const status = _status(sequelize, DataTypes);
  const status_hastag = _status_hastag(sequelize, DataTypes);
  const status_type = _status_type(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);
  const user_hastag = _user_hastag(sequelize, DataTypes);
  const video = _video(sequelize, DataTypes);

  group.belongsToMany(hastag, { as: 'hastag_id_hastags', through: group_hastag, foreignKey: "gr_id", otherKey: "hastag_id" });
  group.belongsToMany(user, { as: 'user_id_users', through: group_member, foreignKey: "gr_id", otherKey: "user_id" });
  hastag.belongsToMany(group, { as: 'gr_id_groups', through: group_hastag, foreignKey: "hastag_id", otherKey: "gr_id" });
  hastag.belongsToMany(status, { as: 'status_id_status_status_hastags', through: status_hastag, foreignKey: "hastag_id", otherKey: "status_id" });
  hastag.belongsToMany(user, { as: 'user_id_user_user_hastags', through: user_hastag, foreignKey: "hastag_id", otherKey: "user_id" });
  status.belongsToMany(hastag, { as: 'hastag_id_hastag_status_hastags', through: status_hastag, foreignKey: "status_id", otherKey: "hastag_id" });
  status.belongsToMany(user, { as: 'user_id_user_likes', through: like, foreignKey: "status_id", otherKey: "user_id" });
  user.belongsToMany(group, { as: 'gr_id_group_group_members', through: group_member, foreignKey: "user_id", otherKey: "gr_id" });
  user.belongsToMany(hastag, { as: 'hastag_id_hastag_user_hastags', through: user_hastag, foreignKey: "user_id", otherKey: "hastag_id" });
  user.belongsToMany(status, { as: 'status_id_statuses', through: like, foreignKey: "user_id", otherKey: "status_id" });
  user.belongsToMany(user, { as: 'user_id_2_users', through: friend_request, foreignKey: "user_id_1", otherKey: "user_id_2" });
  user.belongsToMany(user, { as: 'user_id_1_users', through: friend_request, foreignKey: "user_id_2", otherKey: "user_id_1" });
  group_hastag.belongsTo(group, { as: "gr", foreignKey: "gr_id"});
  group.hasMany(group_hastag, { as: "group_hastags", foreignKey: "gr_id"});
  group_member.belongsTo(group, { as: "gr", foreignKey: "gr_id"});
  group.hasMany(group_member, { as: "group_members", foreignKey: "gr_id"});
  status.belongsTo(group, { as: "gr", foreignKey: "gr_id"});
  group.hasMany(status, { as: "statuses", foreignKey: "gr_id"});
  group_hastag.belongsTo(hastag, { as: "hastag", foreignKey: "hastag_id"});
  hastag.hasMany(group_hastag, { as: "group_hastags", foreignKey: "hastag_id"});
  status_hastag.belongsTo(hastag, { as: "hastag", foreignKey: "hastag_id"});
  hastag.hasMany(status_hastag, { as: "status_hastags", foreignKey: "hastag_id"});
  user_hastag.belongsTo(hastag, { as: "hastag", foreignKey: "hastag_id"});
  hastag.hasMany(user_hastag, { as: "user_hastags", foreignKey: "hastag_id"});
  comment.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(comment, { as: "comments", foreignKey: "status_id"});
  document.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(document, { as: "documents", foreignKey: "status_id"});
  image.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(image, { as: "images", foreignKey: "status_id"});
  like.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(like, { as: "likes", foreignKey: "status_id"});
  report.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(report, { as: "reports", foreignKey: "status_id"});
  status_hastag.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(status_hastag, { as: "status_hastags", foreignKey: "status_id"});
  video.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(video, { as: "videos", foreignKey: "status_id"});
  status.belongsTo(status_type, { as: "type", foreignKey: "type_id"});
  status_type.hasMany(status, { as: "statuses", foreignKey: "type_id"});
  comment.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(comment, { as: "comments", foreignKey: "user_id"});
  friend_request.belongsTo(user, { as: "user_id_1_user", foreignKey: "user_id_1"});
  user.hasMany(friend_request, { as: "friend_requests", foreignKey: "user_id_1"});
  friend_request.belongsTo(user, { as: "user_id_2_user", foreignKey: "user_id_2"});
  user.hasMany(friend_request, { as: "user_id_2_friend_requests", foreignKey: "user_id_2"});
  group.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(group, { as: "groups", foreignKey: "user_id"});
  group_member.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(group_member, { as: "group_members", foreignKey: "user_id"});
  like.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(like, { as: "likes", foreignKey: "user_id"});
  notification.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(notification, { as: "notifications", foreignKey: "user_id"});
  report.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(report, { as: "reports", foreignKey: "user_id"});
  status.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(status, { as: "statuses", foreignKey: "user_id"});
  user_hastag.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_hastag, { as: "user_hastags", foreignKey: "user_id"});

  return {
    admin,
    comment,
    document,
    friend_request,
    group,
    group_hastag,
    group_member,
    hastag,
    image,
    like,
    notification,
    report,
    status,
    status_hastag,
    status_type,
    user,
    user_hastag,
    video,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
