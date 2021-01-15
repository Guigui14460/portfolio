import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Marginer from './marginer';

export enum SkillLevel {
    Beginner,
    Intermediate,
    Expert,
};

const ProgressBarWrapper = styled(motion.div)`
    width: 100%;
    height: 12px;
    background-color: #4b4747;
    border-radius: 50px;
    overflow: hidden;
`;

const ProgressBarSkillInsider = styled(ProgressBarWrapper)<{ width: number, color: string }>`
    width: ${({ width }) => width + "%"};
    background-color: ${({ color }) => color};
`;

const ProgressBarSkill = (props: { name: string; percentage: number; level: SkillLevel, color: string }) => {
    const { name, percentage, level, color } = props;
    const variants = {
        enter: {
            width: 0,
            opacity: 0,
        },
        animate: {
            opacity: 1,
            width: percentage + "%",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        }
    };
    return <div style={{ padding: '10px', textAlign: 'left' }}>
        {name} ({SkillLevel[level]})
        <Marginer direction="vertical" margin={10} />
        <ProgressBarWrapper>
            <ProgressBarSkillInsider variants={variants} initial="enter" animate="animate" exit="enter" width={percentage} color={color} />
        </ProgressBarWrapper>
    </div>
}

export default ProgressBarSkill;