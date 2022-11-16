"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const axios_1 = __importDefault(require("axios"));
function Search(query) {
    return new Promise(async (res, rej) => {
        axios_1.default
            .request({
            url: 'https' +
                '://' +
                'api' +
                '.usamin' +
                '.cc/' +
                '330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=' +
                query +
                '&page=1',
            method: 'GET',
            headers: {
                token: 'JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b',
                accept: 'application/json',
                appbuildcode: '1622092501',
                appsignature: 'QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9',
                'accept-encoding': 'gzip',
                'user-agent': 'okhttp/4.9.0',
            },
        })
            .then(({ data }) => {
            res(data.result.filter((val, i) => i < 10));
        })
            .catch((error) => {
            console.error(error);
            rej(`${error}`);
        });
    });
}
exports.Search = Search;
