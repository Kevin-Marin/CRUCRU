const Refrigerante = require("../models/pet_model.js");

const store = async (req, res) => {
  await Refrigerante.create(req.body);
  res.json();
};

const index = async (req, res) => {
  const content = Refrigerante.find().exec();
  res.json(content);
};

const show = async (req, res) => {
  const content = Refrigerante.findById(req.params.id).exec();
  res.json(content);
};

const update = async (req, res) => {
  await Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec(res.json());
};

const destroy = async (req, res) => {
  await Refrigerante.findByIdAndDelete(req.params.id).exec();
  res.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};