import { Helmet, HelmetProvider } from "react-helmet-async"
import Hero from "./components/Hero/Hero"
import './HomePage.scss'
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../interface";
import { Skills } from "./components/Skills/Skills";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import { Languages } from "./components/Languages/Languages";
import { ContactMe } from "./components/ContactMe/ContactMe";

const HomePage = () => {
  const { collapsed } = useOutletContext<OutletContextType>();

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
      <div>
        <div className='container'>
          <Hero collapsed={collapsed} />
          <Skills collapsed={collapsed} />
          <WorkExperience />
          <Languages />
          <ContactMe />
        </div>
      </div>
    </div>
  )
}

export default HomePage;