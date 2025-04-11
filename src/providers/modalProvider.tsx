import useOutsideClick from '@/hooks/useOutsideClick';
import useModalStore from '@/stores/modalStore';

// 전역상태를 가져와 단순히 렌더해주는 역할. 배열로 모달이 쌓이는 맥락에 맞게 중첩모달을 구현할 수 있음.
function ModalProvider() {
  const modals = useModalStore((state) => state.modals);
  const closeModal = useModalStore((state) => state.closeModal);

  const outsideClick = useOutsideClick(() => closeModal());
  if (modals.length === 0) return null;
  return (
    <div className="absolute bottom-0 z-[999] h-screen w-full bg-black/40 flex justify-center items-center">
      {modals.map(({ element }, key) => (
        <div ref={outsideClick} key={key} className="mb-20">
          {element}
        </div>
      ))}
    </div>
  );
}

export default ModalProvider;
