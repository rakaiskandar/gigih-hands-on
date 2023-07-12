const wait = val => new Promise((resolve) => 
    setTimeout(resolve, val));

wait(2000).then(() => console.log(3));
wait(3000).then(() => console.log(4));
wait(1000).then(() => console.log(2));
console.log(1);