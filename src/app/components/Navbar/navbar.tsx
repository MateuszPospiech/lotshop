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
                    <li><a href={el.href}>{el.text}</a></li>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar;