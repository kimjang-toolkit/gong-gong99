import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import { useCobuyingDetail } from '@/hooks/queries/useCobuying';
import DefaultLayout from '@/layouts/DefaultLayout';
import AttendeeBottomSheet from '@/pages/co-buying/[id]/BottomSheet/AttendeeBottomSheet';
import QuantityBottomSheet from '@/pages/co-buying/[id]/BottomSheet/QuantityBottomSheet';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import { DivideType } from '@domain/cobuying';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
export default function DetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const { isLoading, data } = useCobuyingDetail(id, searchParams.get('ownerName'));
    const [isApplyingFormOpen, setIsApplyingFormOpen] = useState(false);
    const handleManageButton = () => {
        // 관리하기 비밀번호 페이지
        navigate('password');
    };
    return (_jsxs(_Fragment, { children: [_jsxs(DefaultLayout, { children: [_jsx(RightButtonHeader, { backUrl: "/co-buying", rightElement: _jsx("button", { className: "text-caption-bold text-primary-400", onClick: handleManageButton, children: "\uAD00\uB9AC\uD558\uAE30" }) }), isLoading ? (_jsx("div", { children: "Loading..." })) : (_jsx(InfoSection, { data: data })), _jsx(BottomButton, { label: "\uC2E0\uCCAD\uD558\uAE30", onClick: () => {
                            setIsApplyingFormOpen(true);
                            console.log('open bottom sheet');
                        } })] }), data?.type === DivideType.attendee && (_jsx(AttendeeBottomSheet, { isOpen: isApplyingFormOpen, setIsOpen: setIsApplyingFormOpen, data: {
                    quantity: 3,
                    totalPrice: 9000,
                } })), data?.type === DivideType.quantity && (_jsx(QuantityBottomSheet, { isOpen: isApplyingFormOpen, setIsOpen: setIsApplyingFormOpen, data: {
                    remainQuantity: 3,
                    unitPrice: 3000,
                } }))] }));
}
