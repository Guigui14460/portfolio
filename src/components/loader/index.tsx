import { motion } from 'framer-motion';
import styled from 'styled-components';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                reverse: Infinity,
                duration: 0.5,
            },
            y: {
                reverse: Infinity,
                duration: 0.25,
                ease: 'easeOut',
            },
        },
    },
};

const LoaderDot = styled(motion.div)`
    width: 10px;
    height: 10px;
    margin: 40px auto;
    border-radius: 50%;
    background: #ffffff;
    display: "block";
`;

export const DotLoader = () => {
    return (<>
        <LoaderDot variants={loaderVariants} animate="animationOne" />
    </>)
};

const CircleLoader = styled(motion.div)<{ width: number }>`
    position: relative;
    width: ${({ width }) => width + "px"};
    height: ${({ width }) => width + "px"};
    display: block;
    border: ${({ width }) => (width/7) + "px"} solid #E9E9E9;
    border-top: ${({ width }) => (width/7) + "px"} solid #3195ad;
    border-radius: 50%;
    top: 0;
    left: 0;
`;

const SpinLoader = (props: { width: number; }) => {
    return <>
        <CircleLoader width={props.width} animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 0.75 }} />
    </>
}
export default SpinLoader;
  
const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
};
  
const loadingCircleVariants = {
    start: {
      y: "50%"
    },
    end: {
      y: "150%"
    }
  };
  
const loadingCircleTransition = {
    duration: 0.4,
    reverse: Infinity,
    ease: "easeInOut"
};
  
export const DotsLoader = () => {
    return <motion.div style={{
            width: "3rem", height: "2rem",
            display: "flex", justifyContent: "space-around"}}
        variants={loadingContainerVariants}
        initial="start" animate="end">
        <LoaderDot
            variants={loadingCircleVariants}
            transition={loadingCircleTransition} />
        <LoaderDot
            variants={loadingCircleVariants}
            transition={loadingCircleTransition} />
        <LoaderDot
            variants={loadingCircleVariants}
            transition={loadingCircleTransition} />
    </motion.div>;
}
