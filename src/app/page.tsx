import Advisory from "@/components/advisory";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Investment from "@/components/investment";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Investment />
      <Advisory />
      <Footer />
    </>
  );
}
