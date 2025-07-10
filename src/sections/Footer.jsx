import BaseLayout from '../components/layouts/BaseLayout';

const Footer = () => {
  return (
    <div className="h-fit bg-[#1E293B] ">
      <BaseLayout>
        <div className="py-6 flex items-center justify-center text-white font-medium text-xs text-center lg:text-sm">
          <p>
            All rights reserved © 2025 Slerate Consulting. Privacy Policy |
            Terms of Service
          </p>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Footer;
