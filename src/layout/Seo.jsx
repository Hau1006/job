import React from "react";
import { Helmet } from "react-helmet";
// This component is to help with create Seo for Project. Use library Helmet to create
// Have a lot of questions about this component
// waiting for answers
const Seo = ({ description = "", lang = "en", meta = [], title }) => {
  const defaultTitle = "get from api to have each page to load ";
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: "google-site-verification",
          content: globalVariable.GOOGLE_SITE_VERIFICATION
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: "og:image",
          content: ""
        },
        {
          name: `twitter:card`,
          content: `munkville`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author.name || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

export default Seo;
