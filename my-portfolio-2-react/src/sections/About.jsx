import "./about.css"

export default function About() {
    return (
        <section id="about" className="container-fluid">
            <div className="mx-auto h-full container grid pcc">
                <div className="about-wrap">                    
                        <div className="">
                            <h2 className="section-title">About me</h2>                           
                                <p className="section-text about-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, 
                                    praesentium ut dolore necessitatibus debitis ab! Quod non 
                                    facere eos officia qui inventore accusamus illum cupiditate 
                                    quo, magni recusandae tenetur illo consectetur sed error 
                                    doloribus voluptatibus molestias rerum laboriosam? Eum 
                                    cupiditate saepe quibusdam aut amet nemo quasi corporis 
                                    delectus deleniti, voluptatem obcaecati alias explicabo nisi, 
                                    molestiae ut quo. Sint odio pariatur, nobis dolorem odit culpa 
                                    consequatur voluptatibus dignissimos natus molestias repellendus
                                    excepturi delectus, quasi earum quae omnis esse doloribus corporis
                                    quis quia, rerum ipsum veritatis quaerat? Dolores asperiores eum 
                                    aspernatur. Autem nisi, ut blanditiis debitis porro vitae animi
                                     hic omnis doloremque.
                                </p>                                                            
                            </div>
                         <div className="btn-wrap">
                    <a href="Sangram Kishor.pdf" target="_blank" className="btn btn-info"><i className="ri-download-line"></i> Download CV</a>
                </div>
            </div>
            </div>
    </section> 
    )
}