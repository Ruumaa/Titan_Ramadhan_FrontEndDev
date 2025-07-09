import BaseLayout from '../components/layouts/BaseLayout.jsx';
import { featuresProps } from '../lib/featuresProps.js';
import FeatureContainer from '../components/FeatureContainer.jsx';
import Button from '../components/Button.jsx';
import { IoMdArrowUp } from 'react-icons/io';

const Feature = () => {
  return (
    <div className="min-h-screen">
      <div
        className="size-full flex flex-col items-center justify-center mt-32 mb-20 "
        id="feature"
      >
        {/* Title */}
        <h2 className="text-5xl md:text-6xl uppercase md:text-center text-accent font-unbounded mx-5 pr-5">
          What we can do <span className="text-secondary">for you?</span>
        </h2>
        {/* Content Container */}
        <div className="flex size-full mx-auto text-white">
          <div className="w-full bg-main rounded-[4rem] mt-10 mx-5 overflow-hidden">
            {featuresProps.slice(0, 4).map((feat, i) => (
              <FeatureContainer key={i} title={feat.title} desc={feat.desc} />
            ))}
            <div className="bg-secondary">
              <BaseLayout>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-20 py-11 ">
                  <div className="font-unbounded text-4xl">
                    Free consultation
                  </div>
                  <div className="flex flex-col md:flex-row items-center mt-6 gap-y-2 md:gap-x-6">
                    <Button
                      // onClick={() => {}}
                      className="bg-secondary font-bold lg:!pr-2 lg:!pl-5 lg:text-sm md:text-sm lg:hover:text-sm hover:text-secondary hover:bg-white hover:border-secondary hover:border-2 border-2 border-white transition duration-300 ease-in-out flex items-center gap-x-5 w-fit h-14 uppercase group"
                    >
                      Schedule a free call{' '}
                      <IoMdArrowUp className="size-6 rotate-45 mr-3 group-hover:rotate-90 duration-300" />
                    </Button>
                    <p className="line-through font-normal italic">
                      worth 200 USD
                    </p>
                  </div>
                </div>
              </BaseLayout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
