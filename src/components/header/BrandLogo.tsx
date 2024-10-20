import Link from "next/link";
import { NavbarBrand } from "react-bootstrap";

const BrandLogo = () => {
  return (
    <NavbarBrand>
      <div className="beej-logo">
        <Link href={"/"}>
          <h2>
            <strong>BeeJ</strong>
          </h2>
        </Link>
      </div>
    </NavbarBrand>
  );
};

export default BrandLogo;
