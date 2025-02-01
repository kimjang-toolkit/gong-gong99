import { Helmet } from 'react-helmet-async';

interface MetaTagProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

const DOMAIN = 'https://gonggong99.store';
const DEFAULT_IMAGE_URL = '/img/OGImage.png';

export default function MetaTag({
  title = '공공구구: 이웃들과 쉽빠 공구하자',
  description = '눌러서 공구글 보러가기',
  imageUrl = DEFAULT_IMAGE_URL,
  url,
}: MetaTagProps) {
  const fullUrl = url ? `${DOMAIN}${url}` : DOMAIN;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:url" content={fullUrl} />
    </Helmet>
  );
}
