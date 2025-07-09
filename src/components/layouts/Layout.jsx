const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-background font-montserrat">
      {children}
    </div>
  );
};

export default Layout;
