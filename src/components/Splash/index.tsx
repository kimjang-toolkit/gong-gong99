import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import splashImg from '/img/splashImg.png';
import Logo from '/img/Logo.png';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/co-buying');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-5 pt-16 bg-white">
      {/* 로고나 로딩 애니메이션을 여기에 추가 */}
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={Logo} alt="Logo" className="object-contain " />
        <p className="text-primary-300 text-[18px] font-normal">
          함께 저렴하게, 공공구구!
        </p>
      </div>
      <img
        src={splashImg}
        alt="splashImg"
        className="object-contain mt-20 max-w-72"
      />
    </div>
  );
}
