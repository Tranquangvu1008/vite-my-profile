import { Metadata } from '../../components/Metadata/Metadata';
import './ContactPage.scss'
import contactImg from '/src/assets/images/i5.png'

const ContactPage = () => {
    return (
        <div>
            <Metadata title="Contact" description="Contact about DEVU" url={window.location.href} />
            <section className="">
                <div className="flex flex-col md:flex-row justify-center md:my-auto px-5 items-center gap-10 h-screen-minus-64">
                    <div className="">
                        <figure><img className="w-auto" src={contactImg} alt="" /></figure>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <h2 className="uppercase lg:text-2xl text-base text-[#3f78e0]">Get In Touch</h2>
                        <h3 className=" lg:text-3xl text-lg max-w-sm">Got any questions? Don't hesitate to get in touch.</h3>
                        <div className="lg:mt-5">
                            <div>
                                <div className=""> <i className="uil uil-location-pin-alt"></i> </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h5 className="font-bold lg:text-lg text-base">Address</h5>
                                <address className='lg:text-base text-sm'>Di An City, Binh Duong province</address>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <div className=""> <i className=""></i> </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h5 className="font-bold lg:text-lg text-base">Phone</h5>
                                <a className='lg:text-base text-sm' href='tel:+84852602740'>+84852 602 740</a>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <div className=""> <i className="uil uil-envelope"></i> </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h5 className="font-bold lg:text-lg text-base">E-mail</h5>
                                <a className='lg:text-base text-sm' href="mailto:tranquangvu1008@gmail.com">tranquangvu1008@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage;