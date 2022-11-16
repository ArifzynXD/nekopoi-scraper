var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/id.ts
var id_exports = {};
__export(id_exports, {
  getId: () => getId
});
module.exports = __toCommonJS(id_exports);
var import_axios = __toESM(require("axios"));
async function GetPost(id) {
  return new Promise(async (res, rej) => {
    let Data, scheme = "https://api.usamin.cc/";
    try {
      await import_axios.default.request({
        url: scheme + "330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/post?id=" + id,
        method: "GET",
        headers: {
          token: "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
          accept: "application/json",
          appbuildcode: "1622092501",
          appsignature: "QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
          "accept-encoding": "gzip",
          "user-agent": "okhttp/4.9.0"
        }
      }).then(({ data }) => {
        Data = {
          id: data.id,
          title: data.title,
          content: data.content,
          image: data.image,
          stream: data.stream,
          download: data.download
        };
      });
    } catch (_error) {
      Data = false;
    } finally {
      res(Data);
    }
  });
}
async function GetSeries(id) {
  return new Promise(async (res, rej) => {
    let Data, scheme = "https://api.usamin.cc/";
    try {
      await import_axios.default.request({
        url: scheme + "330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/series?id=" + id,
        method: "GET",
        headers: {
          token: "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
          accept: "application/json",
          appbuildcode: "1622092501",
          appsignature: "QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
          "accept-encoding": "gzip",
          "user-agent": "okhttp/4.9.0"
        }
      }).then(({ data }) => {
        Data = data;
      });
    } catch (_error) {
      Data = false;
    } finally {
      res(Data);
    }
  });
}
async function getId(id) {
  return new Promise(async (resolve, reject) => {
    let Data;
    try {
      await GetSeries(id).then(async (data) => {
        if (data["episode"]) {
          Data = data;
        } else {
          await GetPost(id).then((data2) => {
            Data = data2;
          });
        }
      });
    } catch {
      Data = false;
    } finally {
      resolve(Data);
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getId
});
