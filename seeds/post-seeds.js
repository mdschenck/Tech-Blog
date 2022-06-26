const { Post } = require("../models");

const postData = [
  {
    title: "Sample Post 1",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: 4,
    upVotes: "2",
    downVotes: "3",
    user_id: "2",
  },
  {
    title: "Sample Post 2",
    postText:
      "Sed viverra ipsum nunc aliquet bibendum. Id diam vel quam elementum pulvinar etiam non quam. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Nibh venenatis cras sed felis eget velit. Ac ut consequat semper viverra nam libero justo. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Tortor vitae purus faucibus ornare suspendisse sed nisi. Quis viverra nibh cras pulvinar mattis nunc. Sed velit dignissim sodales ut eu sem integer vitae justo. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Non curabitur gravida arcu ac tortor dignissim convallis aenean.",
    category: 1,
    upVotes: "3",
    downVotes: "0",
    user_id: "1",
  },
  {
    title: "Sample Post 3",
    postText:
      "Vel turpis nunc eget lorem dolor sed viverra ipsum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada.",
    category: 3,
    upVotes: "55",
    downVotes: "1",
    user_id: "1",
  },
  {
    title: "Sample Post 4",
    postText:
      "Another sample post, this one is short and sweet This Tech blog was a very fun and challenging project.",
    category: 2,
    upVotes: "0",
    downVotes: "5",
    user_id: "3",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
