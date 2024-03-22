import { Helmet } from "react-helmet"

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home page for introducing the owner of Devu.blog's website" />
      </Helmet>
    </div>
  )
}
