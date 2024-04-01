import './ContactPage.scss'
export const ContactPage = () => {
    return (
        <div>
            <section className="">
                <div className="flex items-center justify-center gap-10 h-screen-minus-64 my-auto">
                    <div className="">
                        <figure><img className="w-auto" src="/src/assets/images/i5.png" alt="" /></figure>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h2 className="uppercase text-1xl">Get In Touch</h2>
                        <h3 className="text-2xl">Got any questions? Don't hesitate to get in touch.</h3>
                        <div className="">
                            <div>
                                <div className=""> <i className="uil uil-location-pin-alt"></i> </div>
                            </div>
                            <div>
                                <h5 className="">Address</h5>
                                <address>Moonshine St. 14/05 Light City, London</address>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <div className=""> <i className=""></i> </div>
                            </div>
                            <div>
                                <h5 className="">Phone</h5>
                                <p>00 (123) 456 78 90</p>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <div className=""> <i className="uil uil-envelope"></i> </div>
                            </div>
                            <div>
                                <h5 className="">E-mail</h5>
                                <p className=""><a href="mailto:sandbox@email.com" className="">sandbox@email.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
