import { Icon } from "@iconify/react";
import SidebarItem from "./SidebarItem";
import MyPlaylistItem from "./MyPlaylistItem";

function Sidebar() {
    const sidebarItems = [
        {
            icon: "carbon:home",
            itemName: "Home"
        },
        {
            icon: "carbon:search",
            itemName: "Search"
        }
    ];

    const playlistItems = [
        {
            img: "https://i.pinimg.com/236x/9d/fa/3c/9dfa3cf0e847e82794016a364ffdd6ac.jpg",
            itemName: "space time"
        },
        {
            img: "https://img.ecartelera.com/noticias/54200/54290-m.jpg?v=2.0",
            itemName: "kucing"
        }
    ];

    return ( 
        <>
            <nav className="w-[30%] overflow-hidden h-screen mr-0">
                <div className="flex flex-col my-5 bg-[#0f0f0f] rounded p-3 mx-3 gap-2">
                    {sidebarItems.map((item, i) => (
                        <SidebarItem 
                        key={i}
                        icon={item.icon}
                        itemName={item.itemName} />
                    ))}
                </div>
                <div className="flex flex-col my-5 bg-[#0f0f0f] rounded p-3 mx-3 gap-5">
                    <div className="flex flex-row items-center gap-2">
                        <Icon icon="fluent:library-28-regular" width="30"/>
                        <h2 className="font-semibold text-xl">Your Library</h2>
                    </div>
                    {playlistItems.map((item, i) => (
                    <MyPlaylistItem 
                        key={i}
                        img={item.img}
                        itemName={item.itemName} />
                    ))}
                </div>
            </nav>
        </>
     );
}

export default Sidebar;