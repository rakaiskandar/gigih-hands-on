import SidebarItem from "./SidebarItem";

function Sidebar() {
    const sidebarItems = [
        {
            icon: "carbon:home",
            itemName: "Home",
            path: "/home"
        },
        {
            icon: "carbon:search",
            itemName: "Search",
            path: "/search"
        }
    ];

    return (
        <>
            <div className="flex flex-col my-5 bg-[#0f0f0f] rounded p-3 mx-3 gap-2">
                {sidebarItems.map((item, i) => (
                    <SidebarItem
                        key={i}
                        icon={item.icon}
                        itemName={item.itemName}
                        path={item.path} />
                ))}
            </div>
        </>
    );
}

export default Sidebar;