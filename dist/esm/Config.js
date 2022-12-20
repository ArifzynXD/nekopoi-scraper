const BASE_URL = "https://api.usamin.cc";
export const URL_RECENT = `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/recent`;
export const URL_LIST = (f, ff) => {
    return `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/listall?letter=0-9&type=${f.toLowerCase() == "jav"
        ? "jav"
        : f.toLowerCase() == "hentai"
            ? "hentai"
            : "hentai"}&page=${ff ? Number(ff) : 1}`;
};
export const URL_SEARCH = (q) => `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=${q}&page=1`;
export const URL_POST = (id) => `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/post?id=${id}`;
export const URL_SERIES = (id) => `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/series?id=${id}`;
export const Config = {
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