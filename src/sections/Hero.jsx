import { CiMail } from 'react-icons/ci';
import Button from '../components/Button';
import BaseLayout from '../components/layouts/BaseLayout';
import Navbar from './Navbar';
import { IoMdArrowUp } from 'react-icons/io';
import { handleNavigation } from '../lib/navMenus';
import {
  AnimateOnScroll,
  HoverScale,
  RevealText,
  StaggerContainer,
  StaggerItem,
} from '../components/animations/AnimationWrappers';

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen relative rounded-b-[4rem] bg-linear-to-b from-white via-background to-[#c6d3e2] via-10% overflow-hidden"
      id="hero"
    >
      <Navbar />
      <BaseLayout>
        <div className="min-h-screen lg:h-[calc(100vh-6rem)] flex flex-col items-center justify-center lg:grid lg:grid-cols-3 relative pt-6 pb-10 lg:py-0">
          {/* Text Content */}
          <div className="lg:col-span-2 flex flex-col justify-center order-2 lg:order-1 z-30 md:text-center lg:text-left">
            <RevealText
              text="Unlock Sales Growth with"
              className="font-unbounded text-4xl lg:text-5xl max-w-2xl leading-11 lg:leading-14 lg:pr-2"
              delay={0.2}
            />
            <RevealText
              text="Slerate Sales Boost"
              className="font-unbounded text-4xl lg:text-5xl max-w-2xl leading-11 lg:leading-14 lg:pr-2 text-secondary"
              delay={0.5}
            />

            <AnimateOnScroll
              animation="fadeInUp"
              delay={0.4}
              className="text-xl md:max-w-lg lg:max-w-full lg:text-lg text-[#475569] font-medium mt-4 md:mx-auto lg:mx-0"
            >
              <p>
                Guiding Your Success Journey Through Expertise and Innovation
              </p>
            </AnimateOnScroll>

            <StaggerContainer
              staggerDelay={0.2}
              className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row gap-x-2.5 mt-8 md:mt-12 md:mx-auto lg:mx-0"
            >
              <StaggerItem>
                <HoverScale scale={1.02}>
                  <Button className="bg-white text-[#64748B] font-medium text-xs w-xs flex items-center gap-x-1.5 cursor-default">
                    <CiMail className="size-6 text-gray-600" />
                    Enter your email to get started
                  </Button>
                </HoverScale>
              </StaggerItem>

              <StaggerItem>
                <HoverScale scale={1.05}>
                  <Button
                    onClick={() => handleNavigation('#contact')}
                    className="bg-secondary font-bold lg:!pr-2 lg:!pl-5 lg:text-sm md:text-sm lg:hover:text-sm hover:text-secondary hover:bg-white hover:border-secondary hover:border-2 transition duration-300 ease-in-out flex items-center gap-x-5 w-fit h-14 uppercase group"
                  >
                    Get Started{' '}
                    <IoMdArrowUp className="size-6 rotate-45 mr-3 group-hover:rotate-90 duration-300" />
                  </Button>
                </HoverScale>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center relative order-1 lg:order-2 my-40 lg:ml-10 lg:my-0 z-10">
            <AnimateOnScroll
              animation="scaleIn"
              delay={0.6}
              className="absolute lg:-left-25 top-2/5 lg:top-1/2 -translate-y-1/2 w-xs md:w-md lg:w-[38rem] will-change-transform backface-hidden"
            >
              <img
                src="/images/hero.svg"
                alt="hero"
                className="block object-contain object-center"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Hero;
