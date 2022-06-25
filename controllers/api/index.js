const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

router.use("/users", userRoutes);
router.use("/create-post", postRoutes);
router.use("/update-post", postRoutes);
router.use("/upVote", postRoutes);
router.use("/downVote", postRoutes);

module.exports = router;
