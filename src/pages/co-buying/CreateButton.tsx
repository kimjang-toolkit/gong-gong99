import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const navigate = useNavigate();
  let scrollTimeout: NodeJS.Timeout;

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
  return (
    isButtonVisible && (
      <div className="absolute right-5 bottom-20 ">
        <Button
          onClick={() => {
            navigate('/co-buying/create');
          }}
          label="+ 공구글"
          size="large"
          className="rounded-[28px] shadow-md active:brightness-90"
        />
      </div>
    )
  );
}
