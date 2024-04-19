import { Link } from "react-router-dom"
import errorImg from '/src/assets/images/404.png'
import { Metadata } from "../../components/Metadata/Metadata"

export const ErrorPage = () => {
    return (
        <div>
            <Metadata title="Error" description="Error for something went wrong" />
            <section className="flex flex-col items-center justify-center h-screen">
                <div className="px-10">
                    <div className="">
                        <figure className=""><img className="mx-auto mb-10" src={errorImg} alt="" /></figure>
                    </div>
                    <div className="text-center">
                        <h1 className="mb-[1rem] leading-[1.3] font-bold text-[#343f52] tracking-[-0.01rem] text-[2rem] ">Oops! Page Not Found.</h1>
                        <p className="mb-[3rem]">The page you are looking for is not available or has been moved. Try a different page or go to homepage with the button below.</p>
                        <Link to="/" className="bg-[#3f78e0] text-white p-5 rounded-full">Go to Homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
