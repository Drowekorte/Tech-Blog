//require sequelize
const sequelize = require('../config/connection.js');

//require models
const { Band, Post, User } = require('../models');

//phase 1 create users, bands, and posts 
const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');


//declare seedDatabase function
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //create bulk user data
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //create bulk band data
    const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  //create bulk post data
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: comments[Math.floor(Math.random() * users.length)].id,
    });
  }

  //create bulk userbands data
  // const userbands = await UserBand.bulkCreate(userBandData, {
  //   individualHooks: true,
  //   returning: true,
  // });

process.exit(0);
};

//invoke seedDatabase function
seedDatabase();

//export created data
// module.exports = users, bands, posts, userbands;