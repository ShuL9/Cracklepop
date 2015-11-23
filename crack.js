for( var i = 1; i < 101; i++){
    if (i % 3 !== 0 && i % 5 !== 0){
        console.log(i);
    } else if (i % 3 === 0 && i%5 !== 0) {
        console.log("Crackle");
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Pop");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("CraklePop");
    }
}
