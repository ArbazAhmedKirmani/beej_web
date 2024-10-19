import { NavbarBrand } from "react-bootstrap";

const BrandLogo = () => {
  return (
    <NavbarBrand href="#home">
      <div className="beej-logo">
        <h2>
          <strong>BeeJ</strong>
        </h2>
      </div>
    </NavbarBrand>
  );
};

export default BrandLogo;
