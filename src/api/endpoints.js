// API 엔드포인트 상수 관리
export const ENDPOINTS = {
    COBUYING: {
        PAGE: '/co-buying/page',
        DETAIL: (id) => `/co-buying/${id}`,
        CREATE: '/co-buying',
        PWD_CHECK: (id) => `/co-buying/auth/${id}`,
    },
};
