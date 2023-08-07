import { useEffect, useState } from "react";
import MyPlaylist from "../../components/MyPlaylist";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import auth from "../../hooks/useAuthorize";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
    const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REACT_APP_SPOTIFY_REDIRECT_URI;

    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [playlistUser, setPlaylistUser] = useState([]);

    const handleLogin = async () => {
        await auth.useAuthorize(CLIENT_ID, REDIRECT_URI);
    }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token);

        if (!token) {
            navigate("/");
        }

        const getUserPlayList = async () => {
            try {
                const {data} = await axios.get('https://api.spotify.com/v1/me/playlists', {
                    headers: { Authorization: `Bearer ${token}`},
                });
    
                setPlaylistUser(data.items);
            } catch (e) {   
                console.log(e.message);
            }
        }

        getUserPlayList();
    }, [token])

    const handleLogout = () => {
        setToken("")
        localStorage.removeItem("token");
    }

    return ( 
        <main className="flex justify-start">
            {token === "" || !token ? 
            <>
                <nav className="w-[25%] overflow-hidden h-screen">
                    <Sidebar />
                    <MyPlaylist
                    isLoggedin={false} 
                    />
                </nav>
                <div className="w-[75%] max-h-screen overflow-y-scroll pr-5">
                    <div className="w-full py-3 px-5 bg-[#0f0f0f] my-5 rounded">
                        <Navbar isLoggedIn={false} handleAuth={handleLogin}/>
                        <Outlet />
                    </div>
                </div>
            </>
            : 
            <>
                <nav className="w-[25%] overflow-hidden h-screen">
                    <Sidebar />
                    <MyPlaylist
                    isLoggedin={true}
                    playlistUser={playlistUser} 
                    />
                </nav>
                <div className="w-[75%] max-h-screen overflow-y-scroll pr-5">
                    <div className="w-full py-3 px-5 bg-[#0f0f0f] my-5 rounded">
                        <Navbar isLoggedIn={true} handleAuth={handleLogout}/>
                    </div>
                    <Outlet />
                </div>
            </>
            }
        </main>
     );
}

export default Layout;