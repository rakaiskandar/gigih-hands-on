import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function SidebarItem({ locationNow, icon, itemName, path }) {
    return ( 
        <Link to={path} className={`flex flex-row items-center gap-3`}>
            <Icon icon={icon} width="30"/>
            <p className="font-semibold text-l">{itemName}</p>
        </Link>
     );
}

export default SidebarItem;