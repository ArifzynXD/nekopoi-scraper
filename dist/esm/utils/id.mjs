/** @format */
import axios from "axios";
async function GetPost(id) {
	return new Promise(async (res, rej) => {
		let Data;
		const scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
		try {
			await axios
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
	});
}
async function GetSeries(id) {
	return new Promise(async (res, rej) => {
		let Data;
		const scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
		try {
			await axios
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
	});
}
export async function getId(id) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			await GetSeries(id).then(async (data) => {
				if (data["episode"]) {
					Data = data;
				} else {
					await GetPost(id).then((data) => {
						Data = data;
					});
				}
			});
		} catch {
			Data = false;
		} finally {
			resolve(Data);
		}
	});
}
