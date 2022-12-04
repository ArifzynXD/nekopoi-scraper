"use strict";
/** @format */
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const axios_1 = __importDefault(require("axios"));
function GetPost(id) {
	return __awaiter(this, void 0, void 0, function* () {
		return new Promise((res, rej) =>
			__awaiter(this, void 0, void 0, function* () {
				let Data;
				const scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
				try {
					yield axios_1.default
						.request({
							url:
								scheme +
								"330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/post?id=" +
								id,
							method: "GET",
							headers: {
								token:
									"JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
								accept: "application/json",
								appbuildcode: "1622092501",
								appsignature:
									"QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
								"accept-encoding": "",
								"user-agent": "okhttp/4.9.0",
							},
						})
						.then(({ data }) => {
							Data = {
								id: data.id,
								title: data.title,
								content: data.content,
								image: data.image,
								stream: data.stream,
								download: data.download,
							};
						});
				} catch (_error) {
					Data = false;
				} finally {
					res(Data);
				}
			})
		);
	});
}
function GetSeries(id) {
	return __awaiter(this, void 0, void 0, function* () {
		return new Promise((res, rej) =>
			__awaiter(this, void 0, void 0, function* () {
				let Data;
				const scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
				try {
					yield axios_1.default
						.request({
							url:
								scheme +
								"330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/series?id=" +
								id,
							method: "GET",
							headers: {
								token:
									"JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
								accept: "application/json",
								appbuildcode: "1622092501",
								appsignature:
									"QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
								"accept-encoding": "",
								"user-agent": "okhttp/4.9.0",
							},
						})
						.then(({ data }) => {
							Data = data;
						});
				} catch (_error) {
					Data = false;
				} finally {
					res(Data);
				}
			})
		);
	});
}
function getId(id) {
	return __awaiter(this, void 0, void 0, function* () {
		return new Promise((resolve, reject) =>
			__awaiter(this, void 0, void 0, function* () {
				let Data;
				try {
					yield GetSeries(id).then((data) =>
						__awaiter(this, void 0, void 0, function* () {
							if (data["episode"]) {
								Data = data;
							} else {
								yield GetPost(id).then((data) => {
									Data = data;
								});
							}
						})
					);
				} catch (_a) {
					Data = false;
				} finally {
					resolve(Data);
				}
			})
		);
	});
}
exports.getId = getId;
