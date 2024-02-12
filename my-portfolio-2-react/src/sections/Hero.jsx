import "./hero.css"

export default function Hero() {
    return (
        <section id="hero" className="container-fluid hero">        
        <div className="container">
            <div className="row">
                <div className="col col-text">
                    <p className="first-text">Hello, I am</p>
                    <h1 className="name-text">Sangram<br/>Kishor</h1>
                    <p className="role">UI/UX & Frontend Devloper</p>
                    <div className="find-me-on">
                        Find me on
                        <div className="social-icons-wrapper">
                            <a href="" title="Twitter">
                            <i className="ri-twitter-fill"></i>
                            </a>
                            <a href=""  title="Facebook">    
                            <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a href=""  title="Codepen">                                
                            <i className="ri-codepen-fill"></i> 
                            </a>
                            <a href=""  title="Instagram">                                
                            <i className="ri-instagram-fill"></i>
                            </a>
                            <a href=""  title="Github">                                
                            <i className="ri-github-fill"></i>
                            </a>
                            <a href=""  title="LinkedIn">                                
                            <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </div>
                    </div>                       
                        <div className="flex">
                            <button href="#contact" className="btn btn-lg btn-info mr-1">Hire me!</button>
                        <button className="btn btn-lg btn-outline-info">Portfolio</button> 
                        </div>                       
                    </div>
                    <div className="col col-img"> 
                        <img className="avtar" src="/images/avtar-round.png" alt="Avtar Image"/>
                    </div>
                </div> 
            </div>       
        </section>
  
    )
}