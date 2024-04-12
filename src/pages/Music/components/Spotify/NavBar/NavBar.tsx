import { NavLink, useOutletContext } from "react-router-dom"
import ExpandedIcon from "../../../../../assets/icons/expand.svg"
import { useState } from "react";
import { OutletContextType } from "../../../../../interface";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { collapsed } = useOutletContext<OutletContextType>();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={`${collapsed ? 'w-screen-minus-80' : 'w-screen-minus-200'} mx-auto hidden`}>
            <nav className="flex justify-center">
                <div
                    className='px-[50px] py-[30px]'
                >
                    <ul className="flex gap-[40px] flex-row justify-center">
                        <li className="nav__item">
                            <NavLink to="/music" className="nav__link">
                                Discover
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/music/latest" className="nav__link">
                                Latest
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to=""
                                className="nav__link"
                            >
                                Trending
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to=""
                                className="nav__link"
                            >
                                Popular
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <input className="h-[30px] my-auto px-4 rounded-[35px] text-black max-w-[200px]" type="text" name="search" placeholder="Search" />
                <div className="h-[30px] my-auto relative bg-red">
                    <button className="menu-button" onClick={toggleMenu}>
                        <img className="pl-[66px] mb-2" src={ExpandedIcon} alt="Expand menu" />
                    </button>
                    {isMenuOpen && (
                        <div className="flex flex-col absolute bg-[#2c4b68] shadow-xl p-2 z-[2]">
                            <a href="#" className="whitespace-nowrap p-2 hover:bg-gray-500">Menu Item 1</a>
                            <a href="#" className="whitespace-nowrap p-2 hover:bg-gray-500">Menu Item 2</a>
                            <a href="#" className="whitespace-nowrap p-2 hover:bg-gray-500">Menu Item 3</a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
