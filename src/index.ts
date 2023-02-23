/**
 * @author FrierenDv
 * @version 2.7.0
 *
 * @link (https://github.com/xct007/nekopoi-scraper)
 */
import axios from "axios";
import {
	axiosConfig,
	URL_RECENT,
	URL_LIST,
	URL_SEARCH,
	URL_POST,
	URL_SERIES,
} from "./Constant.js";
import {
	ResultDetail,
	ResultList,
	ResultRecent,
	ResultSearch,
	errorHandling,
} from "./Types";

/**
 * Get recent hentai
 * @return {Promise<Object>}
 */
const latest = async (): Promise<ResultRecent[] | errorHandling> => {
	let result: ResultRecent[] = [];
	const data = await axios
		.get(URL_RECENT, {
			...axiosConfig,
		})
		.catch((e: any) => e?.response);
	if (data.data && data.data.carousel) {
		for (const i of data.data.carousel) {
			delete i["slug"];
			result.push({
				...i,
			});
		}
	} else {
		return {
			error: true,
			message: "failed to fetch data from {URL_RECENT}",
		};
	}
	return result;
};
/**
 * Get all list ** by type.
 * @param {String} _type (optional), eg. "jav" or "hentai", default "hentai".
 * @param {Number} page (optional), eg. 2, default 1.
 * @return {Promise<Object>}
 */
const list = async (
	_type?: string,
	page?: number
): Promise<ResultList[] | errorHandling> => {
	let result: ResultList[] = [];
	const data = await axios
		.get(URL_LIST(_type ? _type : "hentai", page ? page : 1), {
			...axiosConfig,
		})
		.catch((e: any) => e?.response);
	if (data.data && Array.isArray(data.data.result)) {
		for (const i of data.data.result) {
			result.push({
				...i,
			});
		}
	} else {
		return {
			error: true,
			message: "failed to fetch data from {URL_LIST}",
		};
	}
	return result;
};

/**
 * get hentai by query.
 * @param {String} query
 * @param {Number} limit (optional), for number of output, eg. 10
 * @return {Promise<Object>}
 */
const search = async (
	query: string,
	limit?: number
): Promise<ResultSearch[] | errorHandling> => {
	let result: ResultSearch[] = [];
	const data = await axios
		.get(URL_SEARCH(query), {
			...axiosConfig,
		})
		.catch((e: any) => e?.response);
	if (data.data && Array.isArray(data.data.result)) {
		let _tmp: ResultSearch[] = [];
		for (const i of data.data.result) {
			_tmp.push({ ...i });
		}
		_tmp = _tmp.filter((val: any, i: number) => i < (limit ? limit : 10));
		result = _tmp;
	} else {
		return {
			error: true,
			message: "failed to fetch data from {URL_SEARCH}",
		};
	}
	return result;
};
/**
 * get hentai detail by id
 * @param {Number} id
 * @return {Promise<Object>}
 */
const detail = async (id: number): Promise<ResultDetail | errorHandling> => {
	let result: ResultDetail;
	let data: any = await axios
		.get(URL_SERIES(id), {
			...axiosConfig,
		})
		.catch((e: any) => e?.response);
	if (data.data && data.data.episode) {
		let temp = data.data;
		if (temp.info_meta.genre && temp.info_meta.genre.length) {
			let _temp: string[] = [];
			for (const i of temp.info_meta.genre) {
				_temp.push(i.name);
			}
			delete temp.info_meta["genre"];
			Object.assign(temp.info_meta, {
				genre: _temp.join(", "),
			});
		}
		result = temp;
	} else {
		data = await axios
			.get(URL_POST(id), {
				...axiosConfig,
			})
			.catch((e: any) => e?.response);
		if (data.data && Array.isArray(data.data.stream)) {
			/** remove some unused <Object> */
			delete data.data["content"];
			delete data.data["slug"];
			delete data.data["note"];
			result = data.data;
		} else {
			return {
				error: true,
				message: "Empty stream result {URL_POST} maybe wrong id or idk",
			};
		}
	}
	return result;
};
export { search, latest, list, detail };
export default {
	search,
	latest,
	list,
	detail,
};
