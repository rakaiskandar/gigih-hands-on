function Name({ name, isGender }) {
    return ( 
        <>
            <h1 style={{ color: isGender === "female" ? "lightcoral" : "midnightblue"}}>
                {name}
            </h1>
        </>
     );
}

export default Name;