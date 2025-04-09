import Footer from '../components/Footer'
import './contact.css'

export default function Contact() {
    return (
<>
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
                                <p>Bhubaneswar, Odisha, IND - 751010</p>
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
                                <a href="https://x.com/dev_saan" title="Twitter / X"><i className="ri-twitter-fill"></i></a>
                                <a href="https://instagram.com/dev_saan" title="Instagram"><i className="ri-instagram-fill"></i></a>
                                <a href="https://github.com/itzSaan" title="Github"><i className="ri-github-fill"></i></a>
                                <a href="https://codepen.io/dev_saan" title="Codepen.io"><i className="ri-codepen-fill"></i></a>
                                <a href="https://linkedin.com/in/sangramkishor" title="LinkedIn"><i className="ri-linkedin-fill"></i></a>
                            </div>                            
                           
                        </div>
                    </div>
                    <div className="right">
                        <div className="form-container">
                            <h2>Get in touch</h2>
                            <form action="" className="flex f-col gap-1">
                                <input type="text" placeholder="Name" required/>
                                <input type="email" placeholder="Email" required/>
                                <input type="text" placeholder="Subject" required/>
                                <textarea type="textbox" placeholder="Message" rows="5" required></textarea>
                                <button type="submit" className='form-submit-btn'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</section> 
    <Footer />
</>
    )
}
