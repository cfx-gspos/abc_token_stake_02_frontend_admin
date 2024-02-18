import { getContract } from "@/util/baseEth.js";
import Abcpool from "@/abi/Abcpool.json";
import { ethers, BigNumber } from 'ethers'

let contract

let contractAddress = '0x420A75EA83D3f54A02cC3863C43fC5deD5858D52'

/**
 * 全局init(名称使用合约名命名)
 */
export const initAbcPool = async () => {
    if (contract == null) {
        contract = await getContract(contractAddress, Abcpool);
    }
}


export const getContractAddress = () => {
    return contractAddress;
}

//获取余额
export const getBalanceOf = async (account, _pool) => {
    console.log("getBalanceOf")
    return await contract.methods.balanceOf(account, _pool).call();
}

export const hasMints = async (account, _pool) => {
    console.log("hasMints")
    return await contract.methods.hasMints(account, _pool).call();
}

export const poolRewardCfxs = async (account, _pool) => {
    console.log("poolRewardCfxs")
    return await contract.methods.poolRewardCfxs(account, _pool).call();
}

export const startTimes = async (_pool) => {
    console.log("startTimes")
    return await contract.methods.startTimes(_pool).call();
}

export const lockTimes = async (_pool) => {
    console.log("lockTimes")
    return await contract.methods.lockTimes(_pool).call();
}

export const getPoolRewardEarned = async (account, _pool) => {
    console.log("getPoolRewardEarned")
    return await contract.methods.poolRewardEarned(account, _pool).call();
}


export const getBalance = async () => {
    console.log("getBalance")
    return await contract.methods.getBalance().call();
}

export const getCurPoolRewardRate = async (_pool) => {
    console.log("getCurPoolRewardRate")
    return await contract.methods.getCurPoolRewardRate(_pool).call();
}


export const setNewReward = async (account, _newReward, _pool, _startTime) => {
    console.log("setNewReward")
    console.log(`value: ${_newReward}`)
    console.log(`value parseEther: ${ethers.utils.parseEther(_newReward)}`)
    console.log(`value 0x: ${BigNumber.from(ethers.utils.parseEther(_newReward)).toHexString()}`)
    return await contract.methods.setNewReward('' + ethers.utils.parseEther(_newReward), _pool, _startTime).send(
        {
            from: account,
            value: BigNumber.from(ethers.utils.parseEther(_newReward)).toHexString()
        });
}

export const getRestReward = async (account, _amount) => {
    console.log("getRestReward", account, _amount)
    return await contract.methods.getRestReward(_amount).send({ from: account });
}

export const getRestStake = async (account, _amount) => {
    console.log("getRestStake")
    return await contract.methods.getRestStake(_amount).send({ from: account });
}
