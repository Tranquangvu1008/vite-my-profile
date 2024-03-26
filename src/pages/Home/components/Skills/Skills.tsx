import { useState } from 'react'
import { SkillsCard } from './SkillCard/SkillsCard.js'
import './Skills.scss'
import { SkillsInfoCard } from './SkillsInfoCard/SkillsInfoCard.js'
import { SKILLS } from './utils/data.js'

type SkillsProps = {
    collapsed: boolean
}

export const Skills = ({ collapsed }: SkillsProps) => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

    const handleSelectSkill = (data: any) => {
        setSelectedSkill(data)
    }
    return (
        <section id="elem1" className='skills-container'>
            <h5>Technical Proficiency</h5>
            <div className='skills-content'>
                <div className={`skills ${!collapsed && 'sm:!grid-cols-2 !grid-cols-1'}`}>
                    {SKILLS.map((item) => (
                        <SkillsCard key={item.title} iconUrl={item.icon} title={item.title} isActive={item.title === selectedSkill.title} onClick={() => {
                            handleSelectSkill(item)
                        }} />
                    ))}
                </div>
                <div className='skills-info'>
                    <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
                </div>
            </div>
        </section>
    )
}
