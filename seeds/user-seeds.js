const { User } = require("../models");

const userData = [{
        name: "Andres",
        email: "Andres@email.com",
        password: "123456",
    },
    {
        name: "Moe",
        email: "Moe@email.com",
        password: "123456",

    },
    {
        name: "Striker",
        email: "Striker@email.com",
        password: "123456",
    },
    {
        name: "Michael",
        email: "Michael@email.com",
        password: "123456",
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;