import { PiArrowDownRightThin } from 'react-icons/pi';
import BaseLayout from '../components/layouts/BaseLayout';
import Button from '../components/Button';
import { CiMail } from 'react-icons/ci';
import { IoMdArrowUp } from 'react-icons/io';
import SocialButton from '../components/SocialButton';
import { socialsProps } from '../lib/socialsProps';
import {
  AnimateOnScroll,
  HoverScale,
  MagneticElement,
  StaggerContainer,
  StaggerItem,
} from '../components/animations/AnimationWrappers';

const CTA = () => {
  return (
    <div className="h-fit relative bg-main text-white" id="contact">
      <div className="w-full h-16 rounded-b-[4rem] bg-background" />
      <BaseLayout>
        <div className="h-fit grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8 xl:gap-x-8 py-20 md:py-44">
          {/* Column 1 */}
          <div>
            <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
              <PiArrowDownRightThin className="size-10 md:hidden" />
              <h2 className="font-unbounded text-4xl md:text-[2rem] lg:text-4xl xl:text-5xl uppercase pr-6 leading-12">
                <span className="flex items-center md:gap-x-4 xl:gap-x-6">
                  <PiArrowDownRightThin className="hidden md:block md:size-10 lg:size-14 xl:size-18" />
                  Ready to
                </span>{' '}
                <span className="text-secondary">boost</span> your{' '}
                <span className="text-secondary">sales</span>?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInLeft" delay={0.4}>
              <p className="text-lg md:text-base md:max-w-[18rem] lg:max-w-full lg:text-lg font-medium mt-4 md:mt-10">
                Contact us today to schedule a consultation and discover how we
                can help your business thrive.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-center">
            <div className="lg:my-auto">
              <AnimateOnScroll animation="fadeInRight" delay={0.2}>
                <h5 className="font-bold text-xl">Get a Free consultation</h5>
              </AnimateOnScroll>

              <StaggerContainer
                staggerDelay={0.2}
                className="flex flex-col gap-y-4 xl:gap-y-0 xl:flex-row gap-x-2.5 mt-4 md:mx-auto lg:mx-0"
              >
                <StaggerItem>
                  <HoverScale scale={1.02}>
                    <Button className="bg-white text-[#64748B] font-medium text-xs w-full xl:w-xs flex items-center gap-x-1.5">
                      <CiMail className="size-6 text-gray-600" />
                      Enter your email to get started
                    </Button>
                  </HoverScale>
                </StaggerItem>

                <StaggerItem>
                  <HoverScale scale={1.05}>
                    <Button className="bg-secondary font-bold lg:!pr-2 lg:!pl-5 lg:text-xs md:text-sm lg:hover:text-xs hover:text-secondary hover:bg-white hover:border-secondary hover:border-2 transition duration-300 ease-in-out flex items-center gap-x-5 hover:gap-x-3 w-fit h-14 uppercase group">
                      Get Started{' '}
                      <IoMdArrowUp className="size-6 rotate-45 mr-3 group-hover:rotate-90 duration-300" />
                    </Button>
                  </HoverScale>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Socials */}
            <AnimateOnScroll animation="fadeInRight" delay={0.6}>
              <div className="flex gap-x-4 mt-16 md:mt-auto justify-end">
                {socialsProps.map((social, i) => (
                  <MagneticElement key={i} strength={0.2}>
                    <SocialButton
                      Icon={social.Icon}
                      onClick={() => window.open(social.link, '_blank')}
                    />
                  </MagneticElement>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default CTA;
