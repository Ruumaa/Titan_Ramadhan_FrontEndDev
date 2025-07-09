import { IoMdArrowUp } from 'react-icons/io';
import BaseLayout from './layouts/BaseLayout';

const FeatureContainer = ({ title, desc }) => {
  return (
    <div className="border-b border-background">
      <BaseLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start md:gap-x-20 py-10 md:py-14">
          <IoMdArrowUp className="rotate-135 size-6 mb-4 md:hidden" />

          <div className="font-unbounded text-3xl lg:text-4xl">{title}</div>
          <div className="font-medium text-lg md:text-base mt-3.5 md:mt-0">
            {desc}
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default FeatureContainer;
