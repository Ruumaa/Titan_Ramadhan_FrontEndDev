import { CiMail } from 'react-icons/ci';
import Button from '../components/Button';
import BaseLayout from '../components/layouts/BaseLayout';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen relative  rounded-b-[4rem] bg-linear-to-b from-white via-background to-[#c6d3e2] via-10%"
      id="hero"
    >
      <Navbar />
      <BaseLayout>
        <div className="h-[calc(100vh-6rem)] grid-cols-3 grid relative">
          {/* teks */}
          <div className="col-span-2 flex flex-col justify-center ">
            <h1 className="font-unbounded text-5xl max-w-2xl leading-14 pr-2">
              <span className="text-secondary">Unlock Sales Growth</span> with
              Slerate Sales Boost
            </h1>
            <p className="text-lg text-[#475569] font-medium mt-4">
              Guiding Your Success Journey Through Expertise and Innovation
            </p>
            <div className="flex gap-x-2.5 mt-12">
              <Button
                // onClick={() => {}}
                className="bg-white text-[#64748B] font-medium text-xs w-xs"
              >
                <CiMail className="size-6 text-gray-600" />
                Enter your email to get started
              </Button>
              <Button
                // onClick={() => {}}
                className="bg-secondary font-bold !pr-2 !pl-5 hover:text-secondary hover:bg-background hover:border-secondary hover:border-2 transition duration-300 ease-in-out"
              >
                GET STARTED{' '}
                <span className="size-9 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/arrow.svg" alt="icon" className="size-4" />
                </span>
              </Button>
            </div>
          </div>
          {/* images */}
          <div className="flex items-center justify-center relative">
            <div className="absolute -left-25 top-1/2 -translate-y-1/2 w-[38rem] will-change-transform backface-hidden">
              <img
                src="/images/hero.svg"
                alt="hero"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Hero;
