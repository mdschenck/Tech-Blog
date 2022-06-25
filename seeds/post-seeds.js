const { Post } = require("../models");

const postData = [
  {
    title: "Sample Post 1",
    postText:
      "Hello this is a card for a blog post. Example text post goes here. This is where I blog about things that I know nothing about, and belittle people who also know nothing about the topics at hand. If someone actually knowledgeable came along, myself and the other users of this site would run them off with unnecessary ad-hominem attacks, worthless straw-man arguments and untold number of logical fallacies. This is the way of the tech related blog.",
    category: 4,
    upVotes: "2",
    downVotes: "3",
    user_id: "2",
  },
  {
    title: "Sample Post 2",
    postText:
      "And Yet another test post for a blog post card. Lorem Dorem Issilly Puppy Doggus Maximus Ceasar Saladus.",
    category: 1,
    upVotes: "3",
    downVotes: "0",
    user_id: "1",
  },
  {
    title: "Sample Post 3",
    postText:
      "Hello this is s third test blog post. Example text post goes here. This is where I blog about things that I know nothing about, and belittle people who also know nothing about the topics at hand. If someone actually knowledgeable came along, myself and the other users of this site would run them off with unnecessary ad-hominem attacks, worthless straw-man arguments and untold number of logical fallacies. This is the way of the tech related blog.",
    category: 3,
    upVotes: "55",
    downVotes: "1",
    user_id: "1",
  },
  {
    title: "Sample Post 4",
    postText:
      "And Yet another 4th test post for a blog post card. Lorem Dorem Issilly Puppy Doggus Maximus Ceasar Saladus.",
    category: 2,
    upVotes: "0",
    downVotes: "5",
    user_id: "3",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
