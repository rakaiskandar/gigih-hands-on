import { Icon } from "@iconify/react";

function Navbar({ isLoggedIn, handleAuth }) {
    return ( 
        <nav className="flex flex-row justify-end">
            <div className="flex flex-row justify-start gap-3 mb-2">
                {isLoggedIn === true ?
                <>
                    <div className="text-black bg-white rounded-full px-5 py-3">
                        <h3 className="font-bold text-sm">Explore Premium</h3>
                    </div>
                    <div className="bg-black rounded-full px-2 py-2">
                        <Icon icon="pepicons-print:people" width="20"/>
                    </div>
                    <div className="bg-green-500 px-2 py-2 rounded-full">
                        <button onClick={handleAuth} className="px-5 text-black font-medium">Logout</button>
                    </div>
                </> :
                <>
                    <div className="bg-green-500 rounded-full px-2 py-2">
                        <button onClick={handleAuth} className="px-5 text-black font-medium">Login</button>
                    </div>
                </> 
                }
                
            </div>
        </nav>
     );
}

export default Navbar;