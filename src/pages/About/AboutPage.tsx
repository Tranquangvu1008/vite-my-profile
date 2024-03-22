import { Helmet, HelmetProvider } from "react-helmet-async"


export const AboutPage = () => {
  return <div>
    <HelmetProvider>
      <div>
        <Helmet>
          <title>About Page</title>
          <meta name="description" content="About page for summarizing information about the owner of Devu.blog's website" />
        </Helmet>
      </div>
    </HelmetProvider >
  </div>
}
