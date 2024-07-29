import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-screen min-h-full">
      <Navbar />
      <div className="w-full h-full" style={{ height: "calc(100vh - 80px)" }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
