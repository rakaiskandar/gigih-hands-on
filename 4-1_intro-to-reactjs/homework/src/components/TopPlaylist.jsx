function TopPlaylist({ img, playlistName }) {
    return ( 
        <div className="group block bg-[#272727] gap-3 p-5 rounded">
            <div className="relative">
                <img src={img} alt="image" className="h-[250px] w-full object-cover"/>
            </div>
            <h2 className="font-semibold text-xl py-2">{playlistName}</h2>
        </div>
     );
}

export default TopPlaylist;