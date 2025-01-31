import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function CreateButton() {
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const navigate = useNavigate();
    let scrollTimeout;
    useEffect(() => {
        const handleScroll = () => {
            setIsButtonVisible(false);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => {
                setIsButtonVisible(true);
            }, 500);
        };
        const scrollContainer = document.getElementById('app-main');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);
    return (isButtonVisible && (_jsx("div", { className: "absolute right-5 bottom-20 ", children: _jsx(Button, { onClick: () => {
                navigate('/co-buying/create');
            }, label: "+ \uACF5\uAD6C\uAE00", size: "small", className: "rounded-[20px] shadow-md active:brightness-90" }) })));
}
