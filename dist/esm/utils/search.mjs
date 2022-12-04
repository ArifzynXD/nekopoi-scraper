/** @format */
import axios from "axios";
export function Search(query) {
	return new Promise(async (res, rej) => {
		axios
			.request({
				url:
					"https" +
					"://" +
					"api" +
					".usamin" +
					".cc/" +
					"330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=" +
					query +
					"&page=1",
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
				data ? res(data.result.filter((val, i) => i < 10)) : res(false);
			})
			.catch((error) => {
				rej(`${error}`);
			});
	});
}
