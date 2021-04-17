const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user',
  // onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'post',
});

User.hasMany(Comment, {
  foreignKey: 'user',
  // onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post',
  // onDelete: 'CASCADE' 
});

Comment.belongsTo(User, {
  foreignKey: 'user',
});

Comment.belongsTo(Post, {
  foreignKey: 'post',
});


module.exports = { User, Comment, Post };
