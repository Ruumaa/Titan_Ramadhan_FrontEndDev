import { cn } from '../lib/utils';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center py-4 px-6 md:gap-x-4 md:h-14 md:px-6 md:py-4 bg-main text-white  rounded-full duration-300 transition cursor-pointer font-montserrat',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
