function MyPlaylistItem({ img, itemName }) {
    return ( 
        <a href="#" className="flex flex-row items-center gap-3">
            <img src={img} alt="image" className="w-[55px] h-[55px] rounded-md"/>
            <p className="font-normal text-base">{itemName}</p>
        </a>
     );
}

export default MyPlaylistItem;