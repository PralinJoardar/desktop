// const myfunc = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             resolve('second console');

//             reject("LOL")
//         }, 1000)

//     })
// }

// void async function main() {
//     console.log('first console');
//     await myfunc().then(result => console.log(result));
//     console.log('third console');
// }()

// function myfun()
// {
//   return new Promise( (resolve,reject) => {
// 		resolve('second console');
// 	});

// }

// myfun().then((message)=>{
// console.log(message);
// });

// async function main()
// {
// 	console.log('first console');

// 	await myfun();

// 	console.log('third console');
// }

// main();

function disp() {
    return new Promise((res, rej) => {
        setTimeout(
            () => { res('second') }, 1000)
    })

}
disp().then(msg => {
    console.log(msg)
})

void

async function main() {
    console.log('first');
    await disp();
    console.log('third');
}()