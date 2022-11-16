const userRouter = require("express").Router();

// Register Route
// localhost:400/api/users/register
userRouter.post("/register");

// Login Router
// localhost:400/api/users/login
userRouter.post("/login");

// All User Router
// localhost:400/api/users/login
userRouter.get("/all");

module.exports = userRouter;
