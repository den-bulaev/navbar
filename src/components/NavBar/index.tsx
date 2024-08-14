import { useEffect, useRef } from "react";
import { FaHamburger } from "react-icons/fa";
import { links, socials } from "../../data.tsx";

const Navbar: React.FC = () => {
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e: UIEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const innerWidth = (e.currentTarget as unknown as any).innerWidth;

    if (
      innerWidth > 939 &&
      navItemsRef.current?.classList.contains("nav-items-collapsed")
    ) {
      navItemsRef.current.classList.remove("nav-items-collapsed");
      burgerRef.current?.classList.toggle("rotate");
    }
  };

  const handleClickBurger = () => {
    if (burgerRef.current) {
      burgerRef.current.classList.toggle("rotate");
    }

    if (navItemsRef.current) {
      navItemsRef.current.classList.toggle("nav-items-collapsed");
    }
  };

  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <h2 className="nav-text">
          Codding <span className="nav-blue">Addict</span>
        </h2>

        <ul className="nav-items" ref={navItemsRef}>
          {links.map((link) => {
            return (
              <li className="nav-item" key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>

        <ul className="socials-container">
          {socials.map(({ id, icon, url }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>

        <div
          ref={burgerRef}
          className="burger-menu"
          onClick={handleClickBurger}
        >
          <FaHamburger className="burger-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
