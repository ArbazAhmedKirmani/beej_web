import Image from "next/image";
import Logo from "@/assets/logo.png";
import { NavbarBrand } from "react-bootstrap";

const BrandLogo = () => {
  return (
    <NavbarBrand href="#home">
      <Image alt="company_logo" src={Logo} height={50} width={50} />
    </NavbarBrand>
  );
};

export default BrandLogo;
