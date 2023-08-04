import { useEffect, useState } from "react";
import axios from "axios";
import SearchResult from "../../components/SearchResult";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const [token, setToken] = useState("");

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        setToken(accessToken);
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/search?', {
                headers: { Authorization: `Bearer ${token}` },
                params: {
                    q: searchQuery,
                    type: "track"
                }
            });

            setSearchResult(data.tracks.items);
            console.log(data.tracks);
        } catch (e) {
            console.log("Gagal", e.message,);
        }
    }

    return (
        <>
            {token === null || !token ?
                <>
                    <div className="flex flex-row justify-center items-center py-10">
                       <h1 className="font-semibold text-3xl">You must login first</h1>
                    </div>            
                </>
                :
                <>
                   <div className="flex flex-row gap-3">
                        <form onSubmit={handleSearch} className="w-full">
                            <input type="text" className="w-full py-3 px-4 bg-[#0f0f0f] text-white rounded" placeholder="Search"
                            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        </form>
                    </div>
                    <div className="px-3">
                        <div className="grid grid-cols-3 gap-3 my-5">
                            {searchResult.map((item) => (
                                <SearchResult 
                                key={item.album.id}
                                img={item.album.images[0].url}
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

export default Search;