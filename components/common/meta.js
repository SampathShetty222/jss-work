import PropTypes from "prop-types";
import Head from "next/head";

import {
  siteTitle,
  siteDescription,
  twitterHandle,
  ogImage,
  twitterImage,
  siteURL,
} from "site-config";

const Meta = ({
  title = siteTitle,
  description = siteDescription,
  ogImg = { ogImage },
  twitterImg = { twitterImage },
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={siteTitle} />
      <meta name="twitter:title" content={`${title}`} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content={`${twitterImg}`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteURL} />
      <meta property="og:image" content={`${ogImg}`} />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon " />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogImg: PropTypes.string,
  twitterImg: PropTypes.string,
};

export default Meta;
