import Button from "../components/Button"
import "./hero.css"

export default function Hero() {
    return (
        <section id="hero" className="container-fluid hero">        
        <div className="container">
            <div className="row">
                <div className="col col-text">
                    <p className="first-text">Hello, I am</p>
                    <h1 className="name-text">Sangram<br/>Kishor</h1>
                    <p className="role">Fullstack Software Developer</p>
                    <div className="find-me-on">
                        Find me on
                        <div className="social-icons-wrapper">
                            <a href="https://x.com/dev_saan" title="Twitter">
                            <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://www.facebook.com/btwitssaan/"  title="Facebook">    
                            <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="https://codepen.io/dev_saan"  title="Codepen">                                
                            <i className="ri-codepen-fill"></i> 
                            </a>
                            <a href="https://instagram.com/dev_saan"  title="Instagram">                                
                            <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://github.com/itzSaan"  title="Github">                                
                            <i className="ri-github-fill"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sangramkishor"  title="LinkedIn">                                
                            <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </div>
                    </div>                       
                        <div className="flex gap-1">
                            <div className="btn-container">
                                <a href="#contact" className="my-btn">Hire me!</a>
                            </div>

                            <div className="btn-container">
                                <a href="#works" className="my-btn">View Works</a>
                            </div>
                        {/* <button className="btn btn-lg btn-outline-info">Portfolio</button>  */}
                        </div>                       
                    </div>
                    <div className="col col-img"> 
                        <img className="avtar" src="/images/DP.webp" alt="Avtar Image"/>
                    </div>
                </div> 
            </div>       
        </section>
  
    )
}