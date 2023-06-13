import "./Header.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import logo from "../../../assets/images/hbmc-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import en from "../../../assets/images/languages/en.png";
import ar from "../../../assets/images/languages/ar.png";
import menuToggle from "../../../assets/images/menu.png";
import cross from "../../../assets/images/cross.png";
import { useContext, useState } from "react";
import { LanguageContex } from "../../../Contex/LanguageProvider";
import i18next from "i18next";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const { languages, handleChangeLanguage } = useContext(LanguageContex);
  const navigate = useNavigate();

  const handleLanguageChange = (code) => {
    handleChangeLanguage(code);
    // console.log(code);
    navigate(`/${code}`);
  };

  const menu_items = (
    <>
      <li>
        <Link className="text-sm lg:text-base" to="">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-sm lg:text-base" to="">
          about
        </Link>
      </li>
      <li>
        <Link className="text-sm lg:text-base" to="">
          Products
        </Link>
      </li>
      <li>
        <Link className="text-sm lg:text-base" to="">
          Our Brands
        </Link>
      </li>
      <li>
        <Link className="text-sm lg:text-base" to="">
          Projects
        </Link>
      </li>
      <li>
        <div className="language-selector hidden md:block">
          {i18next.language === "en" ? (
            <button
              className="language-toggle flex items-center gap-2"
              onClick={() => setShowSelector(!showSelector)}
            >
              <img src={en} alt="" />
              <span>Eng</span>
              <span>
                <FaAngleDown />
              </span>
            </button>
          ) : (
            <button
              className="language-toggle flex items-center gap-2"
              onClick={() => setShowSelector(!showSelector)}
            >
              <img src={ar} alt="" />
              <span>Ara</span>
              <span>
                <FaAngleDown />
              </span>
            </button>
          )}
          {showSelector && (
            <div className="absolute w-30 rounded-lg p-2 grid gap-1 bg-white shadow-lg select-language">
              {languages?.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setShowSelector(!showSelector);
                  }}
                  className="flex items-center gap-3"
                >
                  <img src={lang.code === "en" ? en : ar} /> {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </li>
      <li className="contact-us">
        <Link className="text-sm lg:text-base" to="">
          Contact us
        </Link>
      </li>
    </>
  );

  return (
    <header className="header-component">
      <HeaderTop></HeaderTop>
      <div className="site-container">
        <div className="flex justify-between items-center py-3 gap-4">
          <div className="logo-area">
            <Link to="/">
              <img src={logo} alt="" className="w-40 lg:w-auto" />
            </Link>
          </div>

          <div className="menu-area">
            <button className="block  md:hidden" onClick={() => setShow(!show)}>
              <img src={!show ? menuToggle : cross} alt="" />
            </button>

            {show && (
              <nav className="mobile-nav  block md:hidden absolute w-44 rounded-lg right-4 bg-white shadow-lg p-4">
                <ul className="grid gap-3">{menu_items}</ul>
              </nav>
            )}

            <nav className="hidden md:block desktop-menu">
              <ul className="flex gap-4 lg:gap-8 capitalize items-center">
                {menu_items}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
