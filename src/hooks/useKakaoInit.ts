import { useEffect } from "react";

const kakaoAppKey = import.meta.env.VITE_APP_KAKAO_KEY;

export const useKakaoInit=()=>{
  useEffect(()=>{
    if(window.Kakao){
      window.Kakao.init(kakaoAppKey);
      window.Kakao.isInitialized();
    }
  },[])
}