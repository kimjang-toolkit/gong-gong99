// API 엔드포인트 상수 관리
export const ENDPOINTS = {
  COBUYING: {
    PAGE: '/co-buying/page',
    DETAIL: (id: string) => `/co-buying/${id}`,
    CREATE: '/co-buying',
    APPLY: '/co-buying/applications',
    CHANGE_STATUS: (id: string) => `/co-buying/${id}/status`,
    IMG_EXTRACT: '/product/extract',
    SHARE_CHECK: (id: string) => `/co-buying/${id}/sharing-check`,
  },
  AUTH: {
    PWD_CHECK: (id: string) => `/co-buying/auth/${id}`,
    REFRESH_TOKEN: '/refresh',
  },
} as const;
