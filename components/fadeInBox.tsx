import { Box, BoxProps } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'

type FadeInBoxProps = BoxProps & {
  fadeDirection?: 'left' | 'right' | 'up' | 'down';
  time?: number;
  distance?: number;
  delay?: number;
};

const MotionBox = motion(Box);

const FadeInBox: React.FC<FadeInBoxProps> = ({
  children,
  fadeDirection = 'left',
  time = 0.5,
  distance = 50,
  delay = 0,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: time, delay, ease: "easeOut" },
      });
    }
  }, [controls, inView, time, delay]);

  return (
    <MotionBox
      ref={ref}
      initial={{
        opacity: 0,
        x:
          fadeDirection === 'left'
            ? -distance
            : fadeDirection === 'right'
              ? distance
              : 0,
        y:
          fadeDirection === 'up'
            ? -distance
            : fadeDirection === 'down'
              ? distance
              : 0,
      }}
      animate={controls}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default FadeInBox;