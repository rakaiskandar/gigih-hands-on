import { Icon } from "@iconify/react";

function Priority({ name, index, isStarred }) {
    return ( 
        <div className="flex flex-row justify-between bg-gray-200 px-3 py-3 rounded">
            <div className="flex flex-row justify-start gap-5">
                <p>{index}.</p>
                <h2 className="font-semibold">{name}</h2>
            </div>
            <div className="">
                {isStarred === true ? 
                <Icon icon="material-symbols:star" color="#F1C93B" width="20"/> 
                : <Icon icon="material-symbols:star-outline" color="gray" width="20"/>}
            </div>
        </div>
     );
}

export default Priority;