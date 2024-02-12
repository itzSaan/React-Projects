
import './skills.css'
import { skills } from '../Data.js'

export default function Skills() {
    return (
        <section id="skills">
        <div className="mx-auto h-full container grid pcc">
            <div className="skill-section-wrap">
                <h2 className="section-title">Skills</h2>
                <div className="w-full">
                    <div className="flex flex-wrap jb gap-1">
                        {skills.map(skill => (
                            <div className="skill-wrap" key={skill.name}>
                            <img src={skill.image} className="skill-icon" alt=""/>
                            <div className="skill-bar">
                                <div className="skill-percent" style={{width: `${skill.stat}`}}>{skill.name}</div>
                            </div>
                        </div> 
                        ))}                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}