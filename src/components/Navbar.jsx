import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons
import { Slide } from 'react-reveal';
import { SiMoneygram } from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { PiIntersectThreeBold } from "react-icons/pi";
import { PiPaperclipFill } from "react-icons/pi";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import cookies from "js-cookie";
import i18next from "i18next";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchInput, setShowSearchInput] = useState(false)
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const languages = [

        {
          code: "per",
          name: "دری | ",
          dir: "rtl",
          country_code: "ir",
        },
        {
          code: "ps",
          name: "پښتو",
          dir: "rtl",
          country_code: "pk",
        },
        {
          code: "en",
          name: "| English",
          country_code: "gb",
        },
      ];
    
      const [isDropdownOpen, setDropdownOpen] = useState(false);
      const [topOffset, setTopOffset] = useState(40);
    
    
      const currentLanguageCode = cookies.get("i18next") || "en";
      const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    
      useEffect(() => {
        document.body.dir = currentLanguage.dir || "ltr";
        if (cookies.get("i18next") === "ps" || cookies.get("i18next") === "per") {
          document.body.className = "persian-font";
        }
        else {
          document.body.className = "english-font";
        }
      }, [currentLanguage, t]);
    
      const toggleDropdown = () => {
        console.log("hover")
        setDropdownOpen(!isDropdownOpen);
      };
    
      const handleLanguageChange = (code) => {
        i18next.changeLanguage(code);
        localStorage.setItem("AGCC", code)
        setDropdownOpen(false); // Close dropdown after selection
      };
    

    return (
        <>
            <div className='px-2 p-1 sm:px-10 flex sm:flex-row flex-col justify-between text-prime bg-gray-950 bg-opacity-10'>
                <div className='flex space-x-10 text-md font-medium '>

                    {/* Email */}
                    <div className="flex items-center font-medium">
                        <FaEnvelope className="mr-2 text-xl" />
                        <span>  {t("footer.email")}</span>
                    </div>

                    <div className="flex items-center  font-medium">
                        <FaPhoneAlt className="mr-2 text-xl" />
                        <span>{t("footer.phone")}</span>
                    </div>
                </div>



                <div className='flex justify-between space-x-4 text-md tracking-wide font-medium '>
                    <Link to='/about' className='hover:text-primefont-semibold'>About</Link>
                    <Link to='/contact' className='hover:text-primefont-semibold'>Contact</Link>
                    <h1 className='hover:text-primefont-semibold'>Request For Qoutation</h1>
                </div>
                <div className='flex justify-between space-x-4 text-md tracking-wide font-medium'>
                {languages
                    .filter((language) => language.code !== localStorage.getItem("AGCC"))
                    .map((language) => (
                      <div key={language.code}>
                        <h1
                          onClick={() => handleLanguageChange(language.code)}
                        >
                          {language.name} 
                        </h1>
                      </div>
                    ))}

                </div>
            </div>

            <div className='flex justify-between items-center text-prime  mt-1 '>
                <div>
                    <img src="/images/logo.png" className='w-44 h-13 bg-white' alt="" />
                </div>

                <div className="hidden md:flex space-x-6 text-primetracking-wider">
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                        <SiMoneygram size={20} className='mr-1'/>
                            {t('navitem1')}
                            <RiArrowDownSFill size={20} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                        >
                            <li className='mt-1'>
                                <Link to='/about' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                    <FaCaretRight />  {t("navitem1Submenu1")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/our-values' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem1Submenu2")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/our-mission&vision' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem1Submenu3")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/privacy&Policy' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem1Submenu4")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                        <GiPerspectiveDiceSixFacesRandom size={25} className='mr-1'/>
                            {t('navitem2')}
                            <RiArrowDownSFill size={20} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                        >
                            <li className='mt-1'>
                                <Link to='/services' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                    <FaCaretRight />  {t("navitem2Submenu1")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='advisory' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem2Submenu2")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='taxation' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem2Submenu3")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/capacity' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem2Submenu4")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='legal' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem2Submenu5")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/research' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem2Submenu6")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/asset' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem2Submenu7")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                        <PiIntersectThreeBold size={25} className='mr-1'/>
                            {t('navitem3')}
                            <RiArrowDownSFill size={20} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                        >
                            <li className='mt-1'>
                                <Link to='/sectors' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                    <FaCaretRight />  {t("navitem3Submenu1")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/public-sector' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem3Submenu2")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/private-sector' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem3Submenu3")}
                                </Link>
                            </li>
                            <li className='mt-1'>
                                <Link to='/ngo-sector' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                    <FaCaretRight />        {t("navitem3Submenu4")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                        <PiPaperclipFill size={25} className='mr-1'/>
                            {t('navitem4')}
                            <RiArrowDownSFill size={20} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                        >
                            <li className='mt-1'>
                                <Link to='/our-clients' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                    <FaCaretRight />  {t("navitem4Submenu1")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                        <MdGroups2 size={25} className='mr-1' />
                            {t('navitem5')}
                            <RiArrowDownSFill size={20} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                        >
                            <li className='mt-1'>
                                <Link to='/about/history' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                    <FaCaretRight />  {t("navitem5Submenu1")}
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <Link to="/careers" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center"><MdOutlineConstruction size={25} className='mr-1' />{t('navitem6')}  </Link>
                </div>

                <div className='flex  text-lg font-medium '>
                    {showSearchInput &&
                        <Slide left  duration={1000}>
                            <input
                                type="text"
                                className='px-2 py-2 rounded-l rounded-e-none  w-28 sm:w-80 border-prime border-2 text-prime placeholder:text-prime'
                                placeholder='Search Here ....'
                            />
                        </Slide>
                    }
                    <button
                        className='text-3xl text-primerelative right-10 hover:text-primeduration-300'
                       onClick={(()=> setShowSearchInput(!showSearchInput))}
                    >
                        <FiSearch />
                    </button>
                </div>
            </div>
            {/* <div className='mb-10'>
            <nav className="bg-prime text-white  fixed w-full z-10 top-0">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/path-to-logo.png" alt="logo" className="h-10 mr-3" />
                        <Link to='/' className="text-xl font-bold">{t('brandName')}</Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem1')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/about' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem1Submenu1")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/our-values' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem1Submenu2")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/our-mission&vision' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem1Submenu3")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/privacy&Policy' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem1Submenu4")}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem2')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/services' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem2Submenu1")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='advisory' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem2Submenu2")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='taxation' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem2Submenu3")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/capacity' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem2Submenu4")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='legal' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem2Submenu5")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/research' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem2Submenu6")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/asset' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem2Submenu7")}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem3')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/sectors' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem3Submenu1")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/public-sector' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem3Submenu2")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/private-sector' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem3Submenu3")}
                                    </Link>
                                </li>
                                <li className='mt-1'>
                                    <Link to='/ngo-sector' className="flex items-center gap-2 font-medium hover:bg-gray-200  hover:text-prime p-2  rounded focus:bg-gray-300 focus:text-prime focus:outline-none">
                                        <FaCaretRight />        {t("navitem3Submenu4")}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem4')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/our-clients' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem4Submenu1")}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem5')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-prime text-white rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/about/history' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem5Submenu1")}
                                    </Link>
                                </li>
                            </ul>
                        </li>


                        <Link to="/careers" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem6')}  </Link>
                        <Link to="/contact" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem7')}  </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <FaGlobe className="text-2xl cursor-pointer" />
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
                                <button onClick={() => changeLanguage('en')} className="block px-4 py-2 font-medium hover:bg-gray-200 w-full text-left">English</button>
                                <button onClick={() => changeLanguage('ps')} className="block px-4 py-2 font-medium hover:bg-gray-200 w-full text-left">پښتو</button>
                                <button onClick={() => changeLanguage('pa')} className="block px-4 py-2 font-medium hover:bg-gray-200 w-full text-left">فارسی</button>
                            </div>
                        </div>
                        <div className="md:hidden" onClick={toggleMenu}>
                            {isOpen ? <FaTimes className="text-2xl cursor-pointer" /> : <FaBars className="text-2xl cursor-pointer" />}
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-gray-800 text-white flex flex-col space-y-4 mt-4 p-4">
                        <a href="#home" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem1')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#about" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem2')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#services" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem3')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem4')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem5')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem6')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="text-xl hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem7')} <RiArrowDownSFill size={20} /> </a>
                    </div>
                )}
            </nav>
        </div> */}
        </>
    );
};

export default Navbar;