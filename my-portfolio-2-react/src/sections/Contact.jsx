import './contact.css'

export default function Contact() {
    return (
        <section id="contact" className="container-fluid">
    <div className="mx-auto h-full container flex ac">
        <div className="contact-section-wrap">                    
            <h2 className="section-title">Contact me</h2>                           
            <div className="w-full">
                <div className="flex jb gap-1 f-col-r lg-f-row">
                    <div className="left flex f-col gap-1">
                        <div className="flex gap-1">
                            <div><i className="ri-map-pin-fill"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Address</span>
                                <p>198 West 21st Street, Suttle 721 New York, 10018</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div><i className="ri-phone-fill"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Phone</span>
                                <p>+91 8908 221 784</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div><i className="ri-mail-send-line"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Email</span>
                                <p>sangramm7@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-1 mb-2">
                            <div><i className="ri-earth-fill"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Website</span>
                                <p>sangramkishor.tk</p>
                            </div>
                        </div>
                        <div className="flex f-col gap-1 social">
                            <span>find me on.</span>
                            <div className="social-icon-wrap flex gap-1">
                                <a href=""><i className="ri-twitter-line"></i></a>
                                <a href=""><i className="ri-instagram-line"></i></a>
                                <a href=""><i className="ri-github-line"></i></a>
                                <a href=""><i className="ri-codepen-line"></i></a>
                                <a href=""><i className="ri-linkedin-box-line"></i></a>
                            </div>                            
                           
                        </div>
                    </div>
                    <div className="right">
                        <h2>Get in touch</h2>
                        <form action="" className="flex f-col gap-1">
                            <input type="text" placeholder="Name" required/>
                            <input type="email" placeholder="Email" required/>
                            <input type="text" placeholder="Subject" required/>
                            <textarea type="textbox" placeholder="Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </div>
</section> 
    )
}