import styled from 'styled-components';
import { motion } from 'framer-motion';
import Marginer from '../marginer';
import { hexToRgb, contrast } from '@/utils/color';

const ProgressBarWrapper = styled(motion.div)<{ color: string }>`
    width: 100%;
    height: 10px;
    background-color: ${({ color }) => (contrast(hexToRgb(color), hexToRgb("#4b4747")) < 2 ? "#ffffff" : "#4b4747")};
    border-radius: 50px;
    overflow: hidden;
`;

const ProgressBarInsider = styled(ProgressBarWrapper)<{ width: number }>`
    width: ${({ width }) => width + "%"};
    background-color: ${({ color }) => color};
`;

const ProgressBarSkill = (props: { name: string; percentage: number, color: string, width?: string }) => {
    const { name, percentage, color, width } = props;
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
        {name}
        <Marginer direction="vertical" margin={10} />
        <ProgressBarWrapper color={color}>
            <ProgressBarInsider variants={variants} initial="enter" animate="animate" exit="enter" width={percentage} color={color} />
        </ProgressBarWrapper>
    </div>
};

export default ProgressBarSkill;
