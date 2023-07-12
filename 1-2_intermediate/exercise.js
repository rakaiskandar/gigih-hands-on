const getSong = val => new Promise ((resolve, reject) => {
    const data = [
        { artist: "Daniel Caesar", title: { name: "Always"}, duration: 3000}
    ];
    
   if (!data === null) {
        resolve(data);
   } else {
        reject("error");
   }
    
})

const wait = time => new Promise((resolve) => 
    setTimeout(resolve, time)
);

const getDataAsync = async () => {
    try {
        const response = await getSong;

        await wait(3000);
        
        return response;
    } catch (error) {
        console.log(error.message);
    }
}       

const AsyncRun = () => {
    getDataAsync().then(data => console.log("promise async resolved", data))
    .catch(err => console.log("promise rejected", err.message));
}

const PromiseRun = () => {
    getSong.then(data => console.log("promise resolved", data))
    .catch(err => console.log("promise rejected", err.message));
}

AsyncRun();
PromiseRun();

