import { Icon } from "@iconify/react";

function SidebarItem({ icon, itemName }) {
    return ( 
        <a href="#" className="flex flex-row items-center gap-3">
            <Icon icon={icon} width="30"/>
            <p className="font-semibold text-l">{itemName}</p>
        </a>
     );
}

export default SidebarItem;