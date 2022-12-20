/**
 * Get recent hentai
 * @returns {Promise<Object>}
 */
export declare const getRecent: () => Promise<object>;
export { getRecent as latest };
/**
 * Get all list ** by type.
 * @param {String} tipe (optional), eg. "jav" or "hentai", default "hentai".
 * @param {String|Number} page (optional), eg. 2 or idk it can be return error maybe.
 * @returns {Promise<Object>}
 */
export declare const list: (tipe?: string, page?: number | string) => Promise<object>;
/**
 * get hentai by query.
 * @param {String} query
 * @param {Number} limit (optional), for number of output, eg. 10
 * @returns {Promise<Object>}
 */
export declare const Search: (query: string, limit?: number | string) => Promise<object>;
export { Search as search };
/**
 * get hentai detail by id
 * @param {Number} id
 * @returns {Promise<Object>}
 */
export declare const getId: (id: number) => Promise<object>;
export { getId as detail };
declare const nekopoi: {
    search: (query: string, limit?: number | string) => Promise<object>;
    latest: () => Promise<object>;
    list: (tipe?: string, page?: number | string) => Promise<object>;
    detail: (id: number) => Promise<object>;
    Search: (query: string, limit?: number | string) => Promise<object>;
    getRecent: () => Promise<object>;
    getId: (id: number) => Promise<object>;
};
export default nekopoi;
/** @encode */
//# sourceMappingURL=index.d.ts.map