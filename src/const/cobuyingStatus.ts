import { CoBuyingStatus } from './../../common-type/src/domain/cobuying';
export const COBUYING_STATUS_MAP = {
  [CoBuyingStatus.APPLYING]: {
    label: '신청중',
    color: 'primary',
  },
  [CoBuyingStatus.SHARING]: {
    label: '나눔중',
    color: 'yellow',
  },
  [CoBuyingStatus.SHARING_COMPLETE]: {
    label: '나눔완료',
    color: 'neutral',
  },
} as const;
