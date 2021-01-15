import React from 'react';
import { SkillLevel } from '../components/ProgressBarSkill';
import ProgressBarSkill from '../components/ProgressBarSkill';

export const SkillsPage = () => {
    return <div>Skills
        <div style={{width: "300px", border: "1px solid white"}}>
        <ProgressBarSkill name="Python" percentage={50} level={SkillLevel.Expert} color="#dbcf21" />
        <ProgressBarSkill name="C" percentage={75} level={SkillLevel.Intermediate} color="#e7762b" />
        <ProgressBarSkill name="ReactJS" percentage={12} level={SkillLevel.Beginner} color="#21db2a" />
        </div>
    </div>
}