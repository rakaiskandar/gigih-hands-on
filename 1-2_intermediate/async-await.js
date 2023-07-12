const wait = val => new Promise((resolve) => 
    setTimeout(resolve, val));

async function asyncWait(){
    console.log("Hello");
    await wait(3000);
    console.log("World");
}

asyncWait();