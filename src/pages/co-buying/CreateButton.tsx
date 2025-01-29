import Button from '@/components/Button';
import { useEffect, useState } from 'react';

export default function CreateButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
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
          label="+ 공구글"
          size="small"
          className="rounded-[20px] shadow-md active:brightness-90"
        />
      </div>
    )
  );
}
