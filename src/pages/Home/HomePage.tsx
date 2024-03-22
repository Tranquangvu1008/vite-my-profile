import { Helmet, HelmetProvider } from "react-helmet-async"

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="Home page for introducing the owner of Devu.blog's website" />
          </Helmet>
        </div>
      </HelmetProvider >
    </div>
  )
}
