export type errorHandling = {
    error: boolean;
    message: string;
};
export type ResultRecent = {
    id: number;
    date: string;
    image: string;
    description: string;
}[];
export type ResultList = {
    id: number;
    date: string;
    title: string;
    image: string;
    type: string;
}[];
export type ResultSearch = {
    id: number;
    date: string;
    title: string;
    image: string;
    type: string;
}[];
export type ResultDetail = {
    id: number;
    date: string;
    title: string;
    description?: string;
    image: string;
    info_meta?: {
        aliases: string;
        episode: string;
        status: string;
        tayang: string;
        produser: string;
        durasi: string;
        skor: string;
        genre: string;
    };
    stream?: {
        link: string;
    }[];
    download?: {
        type: string;
        links: {
            name: string;
            link: string;
        }[];
    };
    episode?: {
        id: number;
        date: string;
        title: string;
        image: string;
    }[];
    series?: {
        id: number;
        date: string;
        title: string;
        image: string;
    }[];
};
//# sourceMappingURL=Types.d.ts.map