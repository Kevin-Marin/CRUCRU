const Moto = require("../models/pet_model.js");

const store = async (req, res) => {
  await Moto.create(req.body);
  res.json();
};

const index = async (req, res) => {
  const content = Moto.find().exec();
  res.json(content);
};

const show = async (req, res) => {
  const content = Moto.findById(req.params.id).exec();
  res.json(content);
};

const update = async (req, res) => {
  await Moto.findByIdAndUpdate(req.params.id, req.body).exec(res.json());
};

const destroy = async (req, res) => {
  await Moto.findByIdAndDelete(req.params.id).exec();
  res.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};