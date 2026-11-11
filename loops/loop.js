// Cristian Villarreal 11/10/26
"use strict";

let fragileCount = 0;
let normalCount = 0;
let unknownCount = 0;


for (let crate = 1; crate <= 20; crate++){
    
    // divisible by 5 = fragile equipment
    if (crate % 5 === 0) {
        console.log(`Crate ${crate}: Handle with care`);
        fragileCount++;
    }

    // even crate number = normal supplies
    else if (crate % 2 === 0){
        console.log(`Crate ${crate}: Load crate`);
        normalCount++;
    }

    // odd crate number = unknown cargo
    else {
        console.log(`Crate ${crate}: Inspect crate`);
        unknownCount++;
    }

    console.log(`Total crates scanned: ${crate}`);
}

console.log(`Fragile crates scanned: ${fragileCount}`);
console.log(`Normal crates scanned: ${normalCount}`);
console.log(`Unkown crates scanned: ${unknownCount}`);