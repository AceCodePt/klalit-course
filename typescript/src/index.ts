// pnpm i @types/node
import fs from "fs"

// async function main() {
    
//     const promise = new Promise((resolve, reject) => {
//         console.log("hii1");
        
//         setTimeout(() => {reject("some text with timeout")},0);
//     });

//     promise.then((x)=>console.log(x))

//     console.log("hii2")

// }

function delay(ms: number){
    return new Promise(resolve => {
        setTimeout(() => resolve("done: " + ms), ms)
    })
}

type x = [number,number]
const arr: x = [1,1]

async function main2() {
    const arr = await Promise.all([
        5
    ])
    console.log("", arr)
}

function PromiseAll(promises: Array<Promise<unknown>>){
    let count = 0;
    const arr: unknown[] = [];
    if(promises.length === 0){
        return Promise.resolve([]);
    }
    return new Promise<unknown[]>((resolve, reject) => {
        promises.forEach((promise,i) => {
            promise
            .then((value) => {
                count++;
                arr[i] = (value)
                if(count === promises.length){
                    resolve(arr)
                }
            })
            .catch(reject)
        })
    })
}
main2()

// main();