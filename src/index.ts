/**
 * @warning
 * @author FrierenDv
 * @version 2.6.8
 * @see @link https://github.com/xct007/nekopoi-scraper
 */
import axios from "axios";
import {
	Result,
	Config,
	URL_RECENT,
	URL_LIST,
	URL_SEARCH,
	URL_POST,
	URL_SERIES,
} from "./Config.js";

/**
 * Get recent hentai
 * @returns {Promise<Object>}
 */
export const getRecent = async (): Promise<object> => {
	let result: Result[] = [];
	const data = await axios
		.get(URL_RECENT, {
			...Config,
		})
		.catch((e: any) => {
			return e.response;
		});
	if (data.data && data.data.carousel) {
		for (const i of data.data.carousel) {
			delete i["slug"];
			result.push({
				...i,
			});
		}
	} else {
		return {
			status: false,
			message: "failed to fetch data from {URL_RECENT}",
		};
	}
	return result;
};
export { getRecent as latest };
/**
 * Get all list ** by type.
 * @param {String} tipe (optional), eg. "jav" or "hentai", default "hentai".
 * @param {String|Number} page (optional), eg. 2 or idk it can be return error maybe.
 * @returns {Promise<Object>}
 */
export const list = async (
	tipe?: string,
	page?: number | string
): Promise<object> => {
	let result: Result[] = [];
	const data = await axios
		.get(URL_LIST(tipe ? tipe : "hentai", page ? page : 1), {
			...Config,
		})
		.catch((e: any) => {
			return e.response;
		});
	if (data.data && data.data.result.length) {
		for (const i of data.data.result) {
			result.push({
				...i,
			});
		}
	} else {
		return {
			status: false,
			message: "failed to fetch data from {URL_LIST()}",
		};
	}
	return result;
};

/**
 * get hentai by query.
 * @param {String} query
 * @param {Number} limit (optional), for number of output, eg. 10
 * @returns {Promise<Object>}
 */
export const Search = async (
	query: string,
	limit?: number | string
): Promise<object> => {
	let result: Result[] = [];
	const data = await axios
		.get(URL_SEARCH(query), {
			...Config,
		})
		.catch((e: any) => {
			return e.response;
		});
	if (data.data && data.data.result.length) {
		let _tmp: Result[] = [];
		for (const i of data.data.result) {
			_tmp.push({ ...i });
		}
		_tmp = _tmp.filter(
			(val: any, i: number) => i < (limit ? Number(limit) : 10)
		);
		result = _tmp;
	} else {
		return {
			status: false,
			message: "failed to fetch data from {URL_SEARCH}",
		};
	}
	return result;
};
export { Search as search };
/**
 * get hentai detail by id
 * @param {Number} id
 * @returns {Promise<Object>}
 */
export const getId = async (id: number): Promise<object> => {
	let result: Result;
	let data: any = await axios
		.get(URL_SERIES(id), {
			...Config,
		})
		.catch((e: any) => {
			return e.response;
		});
	if (data.data && data.data.episode) {
		const temp = data.data;
		let genre: string;
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
				...Config,
			})
			.catch((e: any) => {
				return e.response;
			});
		if (data.data && data.data.stream.length) {
			/** remove some unused <Object> */
			delete data.data["content"];
			delete data.data["slug"];
			delete data.data["note"];
			result = data.data;
		} else {
			result = {
				status: false,
				message: "Empty stream result {URL_POST} maybe wrong id or idk",
			};
		}
	}
	return result;
};
export { getId as detail };
const nekopoi = {
	search: Search,
	latest: getRecent,
	list,
	detail: getId,
	Search,
	getRecent,
	getId
};
export default nekopoi;
/** @encode */
