import { Icon } from "@iconify/react";
import MyPlaylistItem from "./MyPlaylistItem";

function MyPlaylist({ playlistUser, isLoggedin }) {
    return (
        <div className="flex flex-col my-5 bg-[#0f0f0f] rounded p-3 mx-3 gap-5">
            <div className="flex flex-row justify-between items-center gap-2">
                <div className="flex flex-row gap-3">
                    <Icon icon="fluent:library-28-regular" width="30" />
                    <h2 className="font-semibold text-xl">Your Library</h2>
                </div>
                <Icon icon="ic:baseline-plus" width="30" />
            </div>
            {!isLoggedin ? 
            <div className="flex flex-col items-center">
                <a href="/" className="bg-white text-black px-4 py-4 rounded-full">Create your playlist</a>
            </div> 
            :
            playlistUser.map((item, i) => (
                <MyPlaylistItem
                    key={item.id}
                    img={item.images[0].url}
                    itemName={item.name} />
            ))
            }
        </div>
    );
}

export default MyPlaylist;