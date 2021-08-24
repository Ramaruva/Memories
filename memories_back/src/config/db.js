//Database connection to mongoDB Cloud server

require("dotenv").config();

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.y1c1h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    );
};

module.exports = connect;
