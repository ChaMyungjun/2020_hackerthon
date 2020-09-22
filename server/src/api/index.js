import Router from "koa-router";
import client from "./client.js";
import convert from "xml-js";

const api = new Router();

const URL = process.env.URL;

const date = new Date();
let stdDate = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(
  -2
)}${("0" + date.getDate()).slice(-2)}`;

api.get("/", async ctx => {
  const info = {
    data: []
  };

  const data = await client.get(
    `211.237.50.150:7080/openapi/{process.env.serviceKey}/json/Grid_20150827s000000000227_1/1/10/ `
  );

  const xmlTojson = convert.xml2json(data.data, { compact: true, spaces: 4 });
  console.log(xmlTojson);
});

export default api;
