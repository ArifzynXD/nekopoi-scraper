const BASE_URL = "https://api.usamin.cc";

export const URL_RECENT = `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/recent`;

export const URL_LIST = (f: string, ff?: number | string): string => {
	return `${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/listall?letter=0-9&type=${
		f.toLowerCase() == "jav"
			? "jav"
			: f.toLowerCase() == "hentai"
			? "hentai"
			: "hentai"
	}&page=${ff ? Number(ff) : 1}`;
};

export const URL_SEARCH = (q: string) =>
	`${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=${q}&page=1`;

export const URL_POST = (id: number): string =>
	`${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/post?id=${id}`;

export const URL_SERIES = (id: number): string =>
	`${BASE_URL}/330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/series?id=${id}`;

export const Config = {
	headers: {
		token: "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
		accept: "application/json",
		appbuildcode: "1622092501",
		appsignature:
			"QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
		"accept-encoding": "deflate",
		"user-agent": "okhttp/4.9.0",
	},
};

export interface Result {
	status?: boolean;
	message?: string;
	id?: number;
	title?: string;
	content?: string;
	date?: string;
	description?: string;
	image?: string;
	info_meta?: {
		aliases?: string;
		episode?: string | number;
		status?: string;
		tayang?: string;
		produser?: string;
		genre?: string;
		durasi?: string;
		skor?: string;
	};
	episode?: {
		id?: number;
		date?: string;
		title?: string;
		image?: string;
		type?: string;
		description?: string;
	}[];
	series?: {
		id?: number;
		title?: string;
		content?: string;
		image?: string;
		genre?: string;
	};
	stream?: {
		link?: string;
	}[];
	download?: {
		type?: string;
		links?: {
			name?: string;
			link?: string;
		}[];
	}[];
}
