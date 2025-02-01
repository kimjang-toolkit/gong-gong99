import { Helmet } from 'react-helmet-async';

interface MetaTagProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

const DOMAIN = 'https://gonggong99.store/';
const DEFAULT_IMAGE_URL = '/img/OGImage.png';
const DEFAULT_TITLE = '공공구구: 이웃들과 쉽빠 공구하자';
const DEFAULT_DESCRIPTION = '눌러서 공구글 보러가기';

export default function MetaTag({
  title,
  description,
  imageUrl,
  url,
}: MetaTagProps) {
  const fullUrl = url ? `${DOMAIN}${url}` : DOMAIN;
  return (
    <Helmet>
      <title>{title ? title : DEFAULT_TITLE}</title>
      <meta
        name="description"
        content={description ? description : DEFAULT_DESCRIPTION}
      />

      <meta name="type" content="website" />
      <meta property="og:title" content={title ? title : DEFAULT_TITLE} />
      <meta
        property="og:description"
        content={description ? description : DEFAULT_DESCRIPTION}
      />
      {imageUrl && (
        <meta
          property="og:image"
          content={imageUrl ? imageUrl : DEFAULT_IMAGE_URL}
        />
      )}
      <meta property="og:url" content={fullUrl} />
    </Helmet>
  );
}
