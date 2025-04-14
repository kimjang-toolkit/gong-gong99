export const COBUYING_STATUS_MAP = {
  1: {
    label: '모집중',
    color: 'primary',
    fallback: '모집중인 공구글이 없습니다.',
  },
  2: {
    label: '나눔중',
    color: 'yellow',
    fallback: '나눔중인 공구글이 없습니다.',
  },
  3: {
    label: '나눔완료',
    color: 'neutral',
    fallback: '나눔완료인 공구글이 없습니다.',
  },
} as const;
