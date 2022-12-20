export declare const URL_RECENT: string;
export declare const URL_LIST: (f: string, ff?: number | string) => string;
export declare const URL_SEARCH: (q: string) => string;
export declare const URL_POST: (id: number) => string;
export declare const URL_SERIES: (id: number) => string;
export declare const Config: {
    headers: {
        token: string;
        accept: string;
        appbuildcode: string;
        appsignature: string;
        "accept-encoding": string;
        "user-agent": string;
    };
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
//# sourceMappingURL=Config.d.ts.map