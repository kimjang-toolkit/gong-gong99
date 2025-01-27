import { useRouteError } from 'react-router-dom';

interface RouterError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>에러페이지</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
