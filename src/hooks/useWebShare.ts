import { CoBuyingDetail } from "@interface/cobuying";

export default function useWebShare() {
  const share = async (data: CoBuyingDetail) => {
    const shareData = {
      url: data.previewPageUrl, // 현재 페이지의 URL
      title: data.productName,
      text: data.memo ?? "",
    };

    try {
      await navigator.share(shareData);
      console.log("공유 성공");
    } catch (error) {
      console.error("공유 실패:", error);
    }
  };

  return { share };
}
