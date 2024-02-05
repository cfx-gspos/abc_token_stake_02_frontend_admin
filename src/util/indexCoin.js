import { getContract} from "@/util/baseEth.js";
import TestCoin from "@/abi/TestCoin.json";

let contract

/**
 * 全局init(名称使用合约名命名)
 */
export const initCoinContract = async(address)=>{
    contract = await getContract(address,TestCoin);
}

export const approve = async (account,address,amount) =>{
    console.log(`approve: ${address}`)
    return await contract.methods.approve(address,amount).send({from:account});
}

export const symbol = async () =>{
    console.log(`symbol`)
    return await contract.methods.symbol().call();
}

export const allowance = async (account,address) =>{
    console.log(`allowance: ${allowance}`)
    return await contract.methods.allowance(account,address).call();
}
export const balanceOf = async (address) =>{
    console.log(`balanceOf: ${balanceOf}`)
    return await contract.methods.balanceOf(address).call();
}

