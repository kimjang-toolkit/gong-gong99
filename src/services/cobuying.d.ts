import { CoBuyingDetail } from '@interface/cobuying';
import { CoBuyingPageingRes } from '@interface/cobuyingList';
export declare const cobuyingService: {
    getListPage: (id: string, createdAtId: string, ownerName: string) => Promise<CoBuyingPageingRes>;
    getDetail: (id: string, ownerName: string) => Promise<CoBuyingDetail>;
};
