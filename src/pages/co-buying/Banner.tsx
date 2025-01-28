export default function Banner() {
  return (
    <div className="flex w-full p-4 bg-primary-50 ">
      <div className="">
        <p className="text-caption text-default-600">
          이웃들과 냉장고를 야무지게 채워봐요.
        </p>
        <p className="text-h2-bold text-primary-400">
          함께 저렴하게, 공공구구!
        </p>
      </div>
      <img src="/img/마스코트.png" width="32%" />
    </div>
  );
}
