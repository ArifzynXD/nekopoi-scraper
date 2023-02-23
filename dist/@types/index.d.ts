import { ResultDetail, ResultList, ResultRecent, ResultSearch, errorHandling } from "./Types";
declare const latest: () => Promise<ResultRecent[] | errorHandling>;
declare const list: (_type?: string, page?: number) => Promise<ResultList[] | errorHandling>;
declare const search: (query: string, limit?: number) => Promise<ResultSearch[] | errorHandling>;
declare const detail: (id: number) => Promise<ResultDetail | errorHandling>;
export { search, latest, list, detail };
declare const _default: {
    search: (query: string, limit?: number | undefined) => Promise<errorHandling | ResultSearch[]>;
    latest: () => Promise<errorHandling | ResultRecent[]>;
    list: (_type?: string | undefined, page?: number | undefined) => Promise<errorHandling | ResultList[]>;
    detail: (id: number) => Promise<errorHandling | ResultDetail>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map