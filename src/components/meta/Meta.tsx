import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

type IMeta = {
  title: string;
  description?: string;
  image: string;
  type?: "webpage" | "";
};

const Meta: FC<IMeta> = ({ title, description = "", image, type = "webpage" }) => {
  const { asPath } = useRouter();

  const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        {description ? (
          <>
            <meta itemProp="description" name="description" content={description} />
            <link rel="canonical" href={currentUrl}></link>
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="keywords"
              content="IT Английский, Подготовка к собеседованию на английском, Общий английский, Разговорный английский, Английский для взрослых, Саморазвитие, Иностранные языки, IT, Изучение английского языка"
            />
            <meta
              property="og:site_name"
              content="Aнна Русакова - преподаватель английского языка"
            />
            <meta name="twitter:image:alt" content="Уроки английского" />
            <meta name="msapplication-navbutton-color" content="#fbf2e1" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#fbf2e1" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.ico" />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
    </>
  );
};

export default Meta;
