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

// src/utils/search.ts
var search_exports = {};
__export(search_exports, {
  Search: () => Search
});
module.exports = __toCommonJS(search_exports);
var import_axios = __toESM(require("axios"));
function Search(query) {
  return new Promise(async (res, rej) => {
    import_axios.default.request({
      url: "https://api.usamin.cc/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=" + query + "&page=1",
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
      res(data.result.filter((val, i) => i < 10));
    }).catch((error) => {
      console.error(error);
      rej(`${error}`);
    });
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Search
});
