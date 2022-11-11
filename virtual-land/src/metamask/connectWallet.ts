


export const connectWallet =  () => {
// if ((window as any)?.ethereum){

//     if ((window as any)?.ethereum === undefined)
//     {
//       (window as any)?.ethereum?.request({method:'eth_requestAccounts'})

//     }
//     else {
//        let accounts = await (window as any)?.ethereum?.request({method:'eth_requestAccounts'})

//         console.log(`you are already logged in: ${accounts[0]}`)
//     }
// }
// else {
//     console.log('please download MetaMask Wallet to proceed...')
// }


 (window as any)?.ethereum?.request({method:'eth_requestAccounts'}).then((accounts:string[])=>{
    console.log(`hello ${accounts[0]}`)
 }).catch((error:{message:string})=>{
console.log(error.message)
 })


}

