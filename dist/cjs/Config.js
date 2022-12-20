"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.URL_SERIES = exports.URL_POST = exports.URL_SEARCH = exports.URL_LIST = exports.URL_RECENT = void 0;
const BASE_URL = "https://api.usamin.cc";
exports.URL_RECENT = `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/recent`;
const URL_LIST = (f, ff) => {
    return `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/listall?letter=0-9&type=${f.toLowerCase() == "jav"
        ? "jav"
        : f.toLowerCase() == "hentai"
            ? "hentai"
            : "hentai"}&page=${ff ? Number(ff) : 1}`;
};
exports.URL_LIST = URL_LIST;
const URL_SEARCH = (q) => `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=${q}&page=1`;
exports.URL_SEARCH = URL_SEARCH;
const URL_POST = (id) => `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/post?id=${id}`;
exports.URL_POST = URL_POST;
const URL_SERIES = (id) => `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/series?id=${id}`;
exports.URL_SERIES = URL_SERIES;
exports.Config = {
    headers: {
        token: "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
        accept: "application/json",
        appbuildcode: "1622092501",
        appsignature: "QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
        "accept-encoding": "deflate",
        "user-agent": "okhttp/4.9.0",
    },
};
//# sourceMappingURL=Config.js.map