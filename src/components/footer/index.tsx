import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2024 <Link href="/">BEEJ</Link>. All rights reserved.
      </p>
      {/* <p className="right">
          Handcrafted by the <a href="#home">BEEJ</a> team
        </p> */}
    </footer>
  );
};

export default Footer;
