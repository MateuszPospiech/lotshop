const Navbar = () => {
    const navbarItemList = [
        {text: "About", href: "/about"},
        {text: "Contact", href: "/contact"},
    ]
    return(
        <nav>
            {/*TODO:component navbarItem*/}
            <ul>
                {navbarItemList.map((el) => (
                    <li>{el.text}</li>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar;