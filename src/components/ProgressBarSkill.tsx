import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Marginer from './marginer';
import { hexToRgb, contrast } from '../utils';
import { SkillLevel } from '../model/Language';

const ProgressBarWrapper = styled(motion.div)<{ color: string }>`
    width: 100%;
    height: 10px;
    background-color: ${({ color }) => (contrast(hexToRgb(color), hexToRgb("#4b4747")) < 2 ? "#ffffff" : "#4b4747")};
    border-radius: 50px;
    overflow: hidden;
`;

const ProgressBarSkillInsider = styled(ProgressBarWrapper)<{ width: number }>`
    width: ${({ width }) => width + "%"};
    background-color: ${({ color }) => color};
`;

const ProgressBarSkill = (props: { name: string; percentage: number; level: SkillLevel, color: string, width?: string }) => {
    const { name, percentage, level, color, width } = props;
    const variants = {
        enter: {
            width: 0,
            opacity: 0,
        },
        animate: {
            opacity: 1,
            width: percentage + "%",
            transition: {
                duration: 1.2,
                ease: "easeOut",
            },
        }
    };
    return <div style={{ padding: '10px', textAlign: 'left', width: width }}>
        {name} ({SkillLevel[level]})
        <Marginer direction="vertical" margin={10} />
        <ProgressBarWrapper color={color}>
            <ProgressBarSkillInsider variants={variants} initial="enter" animate="animate" exit="enter" width={percentage} color={color} />
        </ProgressBarWrapper>
    </div>
}

export default ProgressBarSkill;