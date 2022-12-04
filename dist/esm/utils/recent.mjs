/** @format */
import axios from "axios";
export function getRecent() {
	return new Promise(async (res, rej) => {
		axios
			.request({
				url:
					"https" +
					"://" +
					"api" +
					".usamin" +
					".cc/" +
					"330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/recent",
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
				const Data = [];
				for (const i of data.carousel) {
					Data.push({
						id: i.id,
						title: i.title,
						image: i.image,
						description: i.description,
					});
				}
				res(Data);
			})
			.catch((error) => {
				rej(`${error}`);
			});
	});
}
