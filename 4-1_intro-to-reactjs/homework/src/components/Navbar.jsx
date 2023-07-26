import { Icon } from "@iconify/react";

function Navbar() {
    return ( 
        <nav className="flex flex-row justify-end">
            <div className="flex flex-row justify-start gap-3 mb-2">
                <div className="text-black bg-white rounded-full px-3 py-2">
                    <h3 className="font-bold text-sm">Explore Premium</h3>
                </div>
                <div className="bg-black rounded-full px-2 py-2">
                    <Icon icon="pepicons-print:people" width="20"/>
                </div>
                <div className="bg-black rounded-full px-2 py-2">
                    <Icon icon="ph:user-bold" width="20"/>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;