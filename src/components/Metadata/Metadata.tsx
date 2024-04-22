import { Helmet } from "react-helmet-async"

interface MetadataProps {
    title: string,
    description: string
}

export const Metadata: React.FC<MetadataProps> = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="react, meta tags, seo" />
            <meta name="author" content="Admin" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg" />
            <meta property="og:url" content="https://devu.blog/" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    )
}
