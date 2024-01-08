import React, { useState } from "react";
import Svg from "./Svg";

function Navbar(props) {
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [itemHovered, setItemHovered] = useState({
        home: false,
        shop: false,
        about: false,
        contact: false
    });

    const logo = <div className="logo">room</div>;

    const navItemsColor = props.isMobile ? { color: "hsl(0, 0%, 0%)" } : { color: "hsl(0, 0%, 100%)" };

    const navItems = (<div style={navItemsColor} className="nav_items">
        <div style={{
            height: (burgerClicked && props.isMobile) ? "30%" : "100%"
        }} className={`item ${(itemHovered && props.isMobile) ? " active" : ""}`} onMouseOver={handleNavItemMouseOver}>home</div>
        <div style={{
            height: (burgerClicked && props.isMobile) ? "30%" : "100%"
        }} className={`item ${(itemHovered && props.isMobile) ? " active" : ""}`} onMouseOver={handleNavItemMouseOver}>shop</div>
        <div style={{
            height: (burgerClicked && props.isMobile) ? "30%" : "100%"
        }} className={`item ${(itemHovered && props.isMobile) ? " active" : ""}`} onMouseOver={handleNavItemMouseOver}>about</div>
        <div style={{
            height: (burgerClicked && props.isMobile) ? "30%" : "100%"
        }} className={`item ${(itemHovered && props.isMobile) ? " active" : ""}`} onMouseOver={handleNavItemMouseOver}>contact</div>
    </div>);

    const burgerMenu = <Svg
        width="20"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#FFF"
        fillRule="evenodd"
    />;

    const closeBurgerMenu = <Svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
        fill="#000"
        fillRule="evenodd"
        opacity=".201"
    />;

    function handleBurgerClick() {
        setBurgerClicked(prevVal => !prevVal);
    }

    function handleNavItemMouseOver() {
        setItemHovered(prevHover => {
            return {
                home: !prevHover,
                shop: !prevHover,
                about: !prevHover,
                contact: !prevHover
            }
        });
    }

    return (
        !props.isMobile ?
            <div className="navbar">
                {logo}
                {navItems}
            </div> :
            <div style={{
                height: burgerClicked && "15%",
                position: burgerClicked && "fixed",
                top: burgerClicked && "0",
                backgroundColor: burgerClicked && "hsl(0, 0%, 100%)",
                transform: burgerClicked ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.3s ease-in-out"
            }} className="menubar">
                <div style={{ height: burgerClicked && "25%" }} onClick={handleBurgerClick} className="burger_wrapper">
                    {burgerClicked ? closeBurgerMenu : burgerMenu}
                </div>
                {!burgerClicked && logo}
                {burgerClicked && navItems}
            </div>
    );
}

export default Navbar;