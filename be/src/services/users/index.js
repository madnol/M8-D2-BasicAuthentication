const express = require("express");
const UserModel = require("./schema");
//*from authTools
const { adminOnly, basic } = require("../authTools");

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    const { _id } = await newUser.save();
    console.log("successfully registered!");
    res.status(201).send(_id);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// usersRouter.put("/me", basic, async (req, res, next) => {
//   try {
//     res.send(req.user);
//   } catch (error) {
//     next(error);
//   }
// });

// usersRouter.delete("/me", async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = usersRouter;
