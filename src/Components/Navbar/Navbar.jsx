import {NavbarButton} from "../common/Buttons/Buttons";

const Navbar = ({linksArray}) => {
    return (
        <div>
            {
                linksArray.map(link => <NavbarButton
                    key={link.name}
                    text={link.name}
                    link={link.url}
                />)
            }
        </div>
    )
};

export default Navbar;