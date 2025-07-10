/* eslint-disable react-refresh/only-export-components */
// animations/AnimationWrappers.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

// Base animation variants
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  // Slide animations
  slideInUp: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },

  slideInDown: {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },

  // Rotate animations
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },

  // Stagger items
  staggerItem: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
};

// Floating animation
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Pulse animation
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Main Animation Wrapper Component
export const AnimateOnScroll = forwardRef(
  (
    {
      children,
      animation = 'fadeInUp',
      delay = 0,
      duration = 0.6,
      className = '',
      once = true,
      amount = 0.3,
      ...props
    },
    ref
  ) => {
    const customVariants = {
      hidden: animationVariants[animation]?.hidden || { opacity: 0, y: 30 },
      visible: {
        ...animationVariants[animation]?.visible,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={customVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

// Stagger Container Wrapper
export const StaggerContainer = ({
  children,
  staggerDelay = 0.2,
  className = '',
  ...props
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item Wrapper
export const StaggerItem = ({
  children,
  className = '',
  animation = 'fadeInUp',
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={animationVariants[animation] || animationVariants.fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Hover Animation Wrapper
export const HoverScale = ({
  children,
  scale = 1.05,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation Wrapper
export const FloatingElement = ({
  children,
  intensity = 10,
  duration = 3,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Pulse Animation Wrapper
export const PulseElement = ({
  children,
  scale = 1.05,
  duration = 2,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Reveal Text Animation
export const RevealText = ({ text, className = '', delay = 0, ...props }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '0.25rem' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Page Transition Wrapper
export const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic Effect (follows mouse)
export const MagneticElement = ({
  children,
  strength = 0.3,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        e.currentTarget.style.transform = `translate(${x * strength}px, ${
          y * strength
        }px) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Count Up Animation
export const CountUp = ({
  end,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  ...props
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration }}
        onUpdate={(latest) => {
          if (latest.opacity === 1) {
            const element = document.querySelector(`[data-count="${end}"]`);
            if (element) {
              let start = 0;
              const increment = end / (duration * 60);
              const timer = setInterval(() => {
                start += increment;
                element.textContent = `${prefix}${Math.floor(start)}${suffix}`;
                if (start >= end) {
                  element.textContent = `${prefix}${end}${suffix}`;
                  clearInterval(timer);
                }
              }, 1000 / 60);
            }
          }
        }}
      >
        <span data-count={end}>
          {prefix}0{suffix}
        </span>
      </motion.span>
    </motion.span>
  );
};
