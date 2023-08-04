import { useEffect, useState } from "react";
import RecentlyPlaylist from "../../components/RecentlyPlaylist";
import TopPlaylist from "../../components/TopPlaylist";
import axios from "axios";

function Home() {
    const [recommend, setRecommend] = useState([]);
    const [token, setToken] = useState("");
    
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

    const getItem = async () => {
        try {
            const {data} = await axios.get('https://api.spotify.com/v1/recommendations', {
                headers: { Authorization: `Bearer ${token}`},
                params: {
                    seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
                    seed_genres: "r-n-b,pop",
                    seed_tracks: "0c6xIDDpzE81m2q797ordA",
                    limit: 15
                }
            })

            setRecommend(data.tracks);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        setToken(accessToken);

        getItem();
    }, [token])

    return ( 
        <>
            {token === null || !token ? 
                <>  
                    <div className="grid grid-cols-1 items-center">
                        <h2 className="font-bold text-xl text-center">You must login first</h2>
                    </div>       
                </>
            : <>    
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
                    <h1 className="font-bold text-2xl">Jump Back In</h1>
                    <div className="grid grid-cols-3 gap-3 my-5">
                        {recommend.map((item, i) => (
                        <TopPlaylist 
                        key={item.id}
                        img={item.album.images[1].url}
                        playlistName={item.album.name}
                        />
                        ))}
                    </div>
                </div>
                   
            </>
            }
        </>
     );
}

export default Home;