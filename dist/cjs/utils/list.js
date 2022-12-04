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
exports.list = void 0;
const axios_1 = __importDefault(require("axios"));
function list(page, tipe) {
	return new Promise((res, rej) =>
		__awaiter(this, void 0, void 0, function* () {
			tipe = ["hentai", "jav"].includes(tipe) ? tipe : "hentai";
			page = page ? page : 1;
			axios_1.default
				.request({
					url:
						"https" +
						"://" +
						"api" +
						".usamin" +
						".cc/" +
						"330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/listall?letter=0-9&type=" +
						tipe +
						"&page=" +
						page,
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
					res(data.result);
				})
				.catch((error) => {
					rej(`${error}`);
				});
		})
	);
}
exports.list = list;
