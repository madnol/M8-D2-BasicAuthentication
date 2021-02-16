//*IMPORT PACKAGE
const express = require("express");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const mongoose = require("mongoose");

//*IMPORT ERROR HANDLERS
const {
  badRequestHandler,
  forbiddenError,
  notFoundHandler,
  unauthorized,
  genericErrorHandler,
} = require("./errorHandlers");

//*IMPORT ROUTES

//*SERVER
const server = express();
const port = process.env.PORT || 5001;

//*MIDDLEWARES
server.use(express.json());
// sever.use(cors());

//*ROUTES

//*ERROR HANDLERS
server.use(badRequestHandler);
server.use(forbiddenError);
server.use(notFoundHandler);
server.use(unauthorized);
server.use(genericErrorHandler);

//*LISTEN
console.log(listEndpoints(server));
// mongoose.set("debug", true);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port:", port);
    })
  )
  .catch(err => console.log(err));
