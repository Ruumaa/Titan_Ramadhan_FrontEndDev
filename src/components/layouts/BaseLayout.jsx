const BaseLayout = ({ children }) => {
  return (
    <div className="max-w-xs w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto">
      {children}
    </div>
  );
};

export default BaseLayout;
