"use strict";
/**
 * Tolong ya adik-adik, kalau comot jangan asal comot
 * Hargai saya, yang sudah capek-capek sniffing yah!
 *
 * Star repo nya aja saya udah merasa di hargai.
 *
 * @format
 * @link (https://github.com/xct007/nekopoi-scraper)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = exports.list = exports.getRecent = exports.Search = void 0;
const search_1 = require("./utils/search");
Object.defineProperty(exports, "Search", {
	enumerable: true,
	get: function () {
		return search_1.Search;
	},
});
const recent_1 = require("./utils/recent");
Object.defineProperty(exports, "getRecent", {
	enumerable: true,
	get: function () {
		return recent_1.getRecent;
	},
});
const list_1 = require("./utils/list");
Object.defineProperty(exports, "list", {
	enumerable: true,
	get: function () {
		return list_1.list;
	},
});
const id_1 = require("./utils/id");
Object.defineProperty(exports, "getId", {
	enumerable: true,
	get: function () {
		return id_1.getId;
	},
});
