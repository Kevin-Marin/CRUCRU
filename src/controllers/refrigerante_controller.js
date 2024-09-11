const Refrigerante = require("../models/refrigerante_model.js");

const store = async (req, res) => {
  try {
  await Refrigerante.create(req.body);
  res.json();
  } catch (err) {
    res.status(400).json(err)
  }

};

const index = async (req, res) => {
  try {
  const content = Refrigerante.find().exec();
  res.json(content);
  } catch {
    res.status(400).json(err)
  }
};

const show = async (req, res) => {
  try {
  const content = Refrigerante.findById(req.params.id).exec();
  res.json(content);
  } catch {
    res.status(400).json(err)
  }
};

const update = async (req, res) => {
  try {
  await Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec(res.json());
  } catch {
    res.status(400).json(err)
  }
};

const destroy = async (req, res) => {
  try {
    await Refrigerante.findByIdAndDelete(req.params.id).exec();
    res.json();
  } catch {
    res.status(400).json(err)
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};