// eslint-disable-next-line no-unused-vars
const SocialButton = ({ Icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="size-10 text-white bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-secondary transition duration-300"
    >
      <Icon className="size-6" />
    </div>
  );
};

export default SocialButton;
