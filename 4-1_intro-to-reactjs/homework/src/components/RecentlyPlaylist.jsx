function RecentlyPlaylist({ img, playlistName }) {
    return ( 
        <div className="flex items-center gap-8 bg-[#272727] rounded">
            <img src={img} alt="image" className="w-[70px] h-[70px]"/>
            <p className="font-semibold text-lg">{playlistName}</p>
        </div>
     );
}

export default RecentlyPlaylist;