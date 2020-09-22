import Router from "koa-router";
import client from "./client.js";

const api = new Router();

const URL = process.env.URL;
console.log(URL);

api.get("/", async ctx => {
  const data = await client.get(
    `${URL}?API_KEY=${process.env.serviceKey}/TYPE=json`
  );

  console.log(data.data)
});

export default api;
