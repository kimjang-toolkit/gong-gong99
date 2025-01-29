export const ENDPOINTS = {
  COBUYING: {
    LIST: '/co-buying',
    DETAIL: (id: string) => `/co-buying/${id}`,
    CREATE: '/co-buying',
  },
  USER: {
    PROFILE: '/user/profile',
  },
} as const;
