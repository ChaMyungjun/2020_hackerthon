import Router from "koa-router";
import client from "./client.js";

const api = new Router();

const URL = process.env.URL;

const date = new Date();
let stdDate = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(
  -2
)}${("0" + (date.getDate() - 1)).slice(-2)}`;

api.get("/", async ctx => {
  const info = {
    data: []
  };

  const data = await client.get(
    `http://211.237.50.150:7080/openapi/${process.env.serviceKey}/json/Grid_201805270000000000227_1/1/10/ `
  );

  console.log(data.data);
});

export default api;
