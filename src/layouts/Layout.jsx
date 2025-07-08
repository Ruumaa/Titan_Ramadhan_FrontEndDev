const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-black">
      <header className="p-4 bg-main">Header</header>
      <main className="p-4">{children}</main>
      <footer className="p-4 bg-secondary">Footer</footer>
    </div>
  );
};

export default Layout;
