import Router from "koa-router";
import client from "./client.js";

const api = new Router();

const URL = process.env.URL;

const date = new Date();
let stdDate = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(
  -2
)}${("0" + (date.getDate() - 1)).slice(-2)}`;

console.log(process.env.serviceKey);

api.get("/info", async (ctx) => {
  const info = {
    name: [],
    smry: [],
    category: [],
    img: [],
    sensitive_imge: [],
  };

  const data = await client.get(
    `http://211.237.50.150:7080/openapi/${process.env.serviceKey}/json/Grid_20150827000000000226_1/1/9/`
  );

  const items = data.data.Grid_20150827000000000226_1.row;

  for (const keys in items) {
    info.name[keys] = items[keys].RECIPE_NM_KO;
    info.smry[keys] = items[keys].SUMRY;
    info.category[keys] = items[keys].NATION_NM;
    info.img[keys] = items[keys].IMG_URL;
    info.sensitive_imge[keys] = items[keys].DET_URL;
  }

  console.log(info)

  ctx.body = info;
  return info;
});

api.get("/recipe", async (ctx) => {
  const info = {
    name: [],
    type: [],
    number: [],
  };

  const data = await client.get(
    `http://211.237.50.150:7080/openapi/${process.env.serviceKey}/json/Grid_20150827000000000227_1/1/10/`
  );

  const items = data.data.Grid_20150827000000000227_1.row;

  for (const keys in items) {
    info.name[keys] = items[keys].IRDNT_NM;
    info.number[keys] = items[keys].IRDNT_CPCTY;
    info.type[keys] = items[keys].IRDNT_TY_NM;
  }

  ctx.body = info;
  return info;
});

api.get("/process", async (ctx) => {
  const info = {
    process: [],
    img: [],
    tip: [],
  };
  const data = await client.get(
    `http://211.237.50.150:7080/openapi/${process.env.serviceKey}/json/Grid_20150827000000000228_1/1/10/`
  );

  const items = data.data.Grid_20150827000000000228_1.row;

  for (const keys in items) {
    info.process[keys] = items[keys].COOKING_DC;
    info.img[keys] = items[keys].STRE_STEP_IMAGE_URL;
    info.tip[keys] = items[keys].STEP_TIP;
  }

  ctx.body = info;
  return info;
});

export default api;

