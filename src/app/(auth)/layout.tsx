const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center h-[85vh] w-full bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;
