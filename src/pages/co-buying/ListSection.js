import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CobuyingCard from '@/components/CobuyingCard';
import Banner from '@/pages/co-buying/Banner';
import { useEffect, useRef } from 'react';
import { useCobuyingList } from '@/hooks/queries/useCobuying';
import CreateButton from '@/pages/co-buying/CreateButton';
import { useNavigate } from 'react-router-dom';
export default function ListSection() {
    const { data, fetchNextPage, hasNextPage } = useCobuyingList();
    const loadMoreRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (loadMoreRef.current) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
            observer.observe(loadMoreRef.current);
            return () => {
                observer.disconnect();
            };
        }
    }, [fetchNextPage, hasNextPage]);
    return (_jsxs(_Fragment, { children: [_jsx(Banner, {}), data?.pages?.map((page) => page.coBuyingList.map((item) => (_jsxs("div", { onClick: () => navigate(`/co-buying/${item.id}?ownerName=${item.ownerName}`), children: [_jsx(CobuyingCard, { item: item }), _jsx("hr", { className: "border-b-1 border-default-100" })] }, item.id)))), _jsx("div", { ref: loadMoreRef, style: { height: '3px' } }), _jsx(CreateButton, {})] }));
}
