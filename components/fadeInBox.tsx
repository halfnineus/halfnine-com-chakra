import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'

type FadeInBoxProps = BoxProps & {
  fadeDirection?: 'left' | 'right' | 'up' | 'down';
  time?: number;
  distance?: number;
  delay?: number;
  disableBelowBreakpoint?: "base" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const MotionBox = motion(Box);

const FadeInBox: React.FC<FadeInBoxProps> = ({
  children,
  fadeDirection = 'left',
  time = 0.5,
  distance = 50,
  delay = 0,
  disableBelowBreakpoint = "md",
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const [isBase] = useMediaQuery("(max-width: 30em)");
  const [isSm] = useMediaQuery("(min-width: 30em) and (max-width: 48em)");
  const [isMd] = useMediaQuery("(min-width: 48em) and (max-width: 62em)");

  const shouldAnimate = React.useMemo(() => {
    if (!disableBelowBreakpoint) return true;
    if (disableBelowBreakpoint === "base" && isBase) return false;
    if (disableBelowBreakpoint === "sm" && (isBase || isSm)) return false;
    if (disableBelowBreakpoint === "md" && (isBase || isSm || isMd)) return false;
    return true;
  }, [disableBelowBreakpoint, isBase, isSm, isMd]);

  React.useEffect(() => {
    if (inView && shouldAnimate) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: time,
          delay,
          ease: "easeOut"
        },
      });
    }
    if (!shouldAnimate) {
      controls.set({
        opacity: 1,
        x: 0,
        y: 0
      });
    }
  }, [controls, inView, shouldAnimate]);

  return (
    <MotionBox
      ref={ref}
      initial={{
        opacity: shouldAnimate ? 0 : 1,
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