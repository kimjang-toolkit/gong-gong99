export default function Banner() {
  return (
    <div className="flex w-full p-4 bg-primary-50 ">
      <div className="flex flex-col w-full">
        <p className="text-caption text-default-600">
          이웃들과 야무지게 구매해요.
        </p>
        <p className="text-h2-bold text-primary-400">
          함께 저렴하게, 공공구구!
        </p>
      </div>
      <img src="/img/마스코트.png" className="h-auto max-w-[85px] " />
    </div>
  );
}
