const express = require('express')
const compression = require('compression')
const cors = require('cors')
const credentials = require('./middlewares/credentials');
const corsOptions = require('./config/corsOptions');

var cookieParser = require("cookie-parser");
require("dotenv").config();

var apiResponse = require("./helpers/apiResponse");


var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var customerRouter = require("./routes/customer");
// var paymentRouter = require("./routes/paymentRouter");
// var adminClientRouter = require("./routes/admin_client");

const app = express()

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));
app.use(compression())
app.enable("trust proxy");
app.use(cookieParser());
app.use(express.json())

// Index Router
app.use("/", indexRouter)
app.use('/auth/', authRouter);
app.use("/customer/", customerRouter);

// app.use("/admin/", adminClientRouter);
// app.use("/auth-admin/", authRouter);
// app.use("/payment/", paymentRouter);


// throw 404 if URL not found
app.all("*", function (req, res) {
  return apiResponse.notFoundResponse(res, "Page not found");
});
app.use((err, req, res) => {
  if (err.name == "UnauthorizedError") {
    return apiResponse.unauthorizedResponse(res, err.message);
  }
});

module.exports = app;