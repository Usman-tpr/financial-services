import React, { useState } from 'react';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mb-10'>
            <nav className="bg-prime text-white  fixed w-full z-10 top-0">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/path-to-logo.png" alt="logo" className="h-10 mr-3" />
                        <Link to='/' className="text-xl font-bold">{t('brandName')}</Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem1')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-gray-800 text-fontcolor rounded-box w-44 sm:w-64 mt-1 z-20"
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
                            <label tabIndex={0} href="#home" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem2')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-gray-800 text-fontcolor rounded-box w-44 sm:w-64 mt-1 z-20"
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
                            <label tabIndex={0} href="#home" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem3')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-gray-800 text-fontcolor rounded-box w-44 sm:w-64 mt-1 z-20"
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
                            <label tabIndex={0} href="#home" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem4')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-gray-800 text-fontcolor rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/our-clients' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem4Submenu1")}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-hover">
                            <label tabIndex={0} href="#home" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                                {t('navitem5')}
                                <RiArrowDownSFill size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content p-2 shadow bg-gray-800 text-fontcolor rounded-box w-44 sm:w-64 mt-1 z-20"
                            >
                                <li className='mt-1'>
                                    <Link to='/about/history' className="flex items-center gap-2 font-medium hover:bg-gray-200 hover:text-prime p-2  rounded focus:bg-gray-600 focus:text-prime focus:outline-none">
                                        <FaCaretRight />  {t("navitem5Submenu1")}
                                    </Link>
                                </li>
                            </ul>
                        </li>


                        {/* <a href="#about" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">
                        {t('navitem2')}
                        <RiArrowDownSFill size={20} />
                    </a> */}
                        <Link to="/careers" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem6')}  </Link>
                        <Link to="/contact" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem7')}  </Link>
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
                        <a href="#home" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem1')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#about" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem2')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#services" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem3')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem4')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem5')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem6')} <RiArrowDownSFill size={20} /> </a>
                        <a href="#contact" className="hover:text-ternary duration-500  hover:bg-secondary p-4 font-semibold flex items-center">{t('navitem7')} <RiArrowDownSFill size={20} /> </a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;