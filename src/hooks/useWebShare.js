export default function useWebShare() {
    const share = async (title, text) => {
        const shareData = {
            url: window.location.href, // 현재 페이지의 URL
            title: title,
            text: text,
        };
        try {
            await navigator.share(shareData);
            console.log('공유 성공');
        }
        catch (error) {
            console.error('공유 실패:', error);
        }
    };
    return { share };
}
