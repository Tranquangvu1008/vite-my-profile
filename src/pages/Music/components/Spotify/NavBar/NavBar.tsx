import { NavLink } from "react-router-dom"
import ExpandedIcon from "../../../../../assets/icons/expand.svg"
import { useState } from "react";

export const NavBar = () => {
    // State để kiểm soát việc hiển thị menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hàm xử lý sự kiện click nút menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="header">
            <nav className="flex justify-center">
                <div
                    className='px-[57px] py-[38px]'
                >
                    <ul className="flex gap-[49px] flex-row justify-center">
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
                <input className="h-[31px] my-auto px-4 rounded-[35px] text-black" type="text" name="search" placeholder="Search" />
                <div className="h-[31px] my-auto relative">
                    <button className="menu-button" onClick={toggleMenu}>
                        <img className="pl-[66px] mb-2" src={ExpandedIcon} alt="Expand menu" />
                    </button>
                    {isMenuOpen && (
                        <div className="flex flex-col absolute bg-transparent shadow-xl p-2">
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
