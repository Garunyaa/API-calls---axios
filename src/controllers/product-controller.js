import axios from "axios";
import { Product } from "../models/product-model";

const baseURL = "https://dummyjson.com";

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get(baseURL + "/products");
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      const { status, statusText } = error.response;
      console.log(status, statusText);
      res.status(status).send(statusText);
    } else {
      res.status(404).send(error);
    }
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await axios.get(baseURL + `/products/${req.params.id}`);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      const { status, statusText } = error.response;
      console.log(status, statusText);
      res.status(status).send(statusText);
    } else {
      res.status(404).send(error);
    }
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find(
      { price: 1499 },
      "id title brand"
    ).exec();
    res.json(product);
  } catch (error) {
    res.status(500).send(error);
  }
};
