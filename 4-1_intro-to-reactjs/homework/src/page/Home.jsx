import Navbar from "../components/Navbar";
import RecentlyPlaylist from "../components/RecentlyPlaylist";
import Sidebar from "../components/Sidebar";
import TopPlaylist from "../components/TopPlaylist";

function Home() {
    const recentlyPlaylist = [
        {
            img: "https://i.pinimg.com/236x/9d/fa/3c/9dfa3cf0e847e82794016a364ffdd6ac.jpg",
            playlistName: "space time"
        },
        {
            img: "https://img.ecartelera.com/noticias/54200/54290-m.jpg?v=2.0",
            playlistName: "kucing" 
        },
    ];

    const topPlaylist = [
        {
            img: "https://i.pinimg.com/236x/9d/fa/3c/9dfa3cf0e847e82794016a364ffdd6ac.jpg",
            playlistName: "space time"
        },
        {
            img: "https://img.ecartelera.com/noticias/54200/54290-m.jpg?v=2.0",
            playlistName: "kucing" 
        },
        {
            img: "https://community.spotify.com/t5/image/serverpage/image-id/104727iC92B541DB372FBC7/image-size/large?v=v2&px=999",
            playlistName: "Liked Songs"
        }
    ];

    return ( 
        <main className="flex justify-start">
            <Sidebar />
            <div className="w-[75%] max-h-screen px-5">
                <div className="w-full py-3 px-5 bg-[#0f0f0f] my-5 rounded">
                    <Navbar />
                    <div className="mb-5">
                        <h1 className="font-bold text-2xl">Good Evening</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        {recentlyPlaylist.map((item, i) => (
                            <RecentlyPlaylist 
                            key={i}
                            img={item.img}
                            playlistName={item.playlistName}
                            />
                        ))}
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-2xl">Top Playlist</h1>
                        <div className="grid grid-cols-3 gap-3 my-5">
                            {topPlaylist.map((item, i) => (
                                <TopPlaylist 
                                key={i}
                                img={item.img}
                                playlistName={item.playlistName}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}

export default Home;