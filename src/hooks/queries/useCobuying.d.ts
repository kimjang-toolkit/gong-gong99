export declare const QUERY_KEYS: {
    readonly COBUYING: {
        readonly LIST: readonly ["cobuying", "list"];
        readonly DETAIL: (id: string) => string[];
    };
};
export declare function useCobuyingList(): import("@tanstack/react-query").UseInfiniteQueryResult<import("@tanstack/react-query").InfiniteData<import("@interface/cobuyingList").CoBuyingPageingRes, unknown>, Error>;
export declare function useCobuyingDetail(id: string, ownerName: string): import("@tanstack/react-query").UseQueryResult<import("@interface/cobuying").CoBuyingDetail, Error>;
