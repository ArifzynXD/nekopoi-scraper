/** @format */
import axios from "axios";
export function list(page, tipe) {
	return new Promise(async (res, rej) => {
		tipe = ["hentai", "jav"].includes(tipe) ? tipe : "hentai";
		page = page ? page : 1;
		axios
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
	});
}
