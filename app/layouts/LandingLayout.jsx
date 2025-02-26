import Header from "@/components/header/LandingHeader";
import Footer from "@/components/footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center dark:bg-darkBg min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;

