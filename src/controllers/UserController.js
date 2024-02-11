const User = require("../model/User");

const createUser = (req, res) => {
  // console.log("aa", req.params.id);
  // res.send("User Controller");
  User.create({
    username: req.body.username,
    age: req.body.age,
  });
  res.send("User Created Successfully");
};
const getUsers = async (req, res) => {
  console.log("=====", req.query.name);
  const result = await User.find({});
  res.send(result);
};
const getUser = async (req, res) => {
  //   console.log("aa", req.params.id);
  //   res.send("User Controller");
  // console.log("=====", req.query.name);
  const id = req.params.id;
  const result = await User.findById();
  res.send(result);
};
const updateUser = async (req, res) => {
  console.log(req.params.id);
  //  65c2612ab598e9b84937517e
  console.log("rresq", req.body.age);
  const id = req.params.id;
  const result = await User.updateOne({ _id: id }, { age: req.body.age });

  // res.send("User Controller UPdate");
  res.send(result);
};
const deleteUser = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const result = await User.deleteOne({ _id: id });
  console.log("eee", result);
  res.send("User Controller Delete");
};

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
