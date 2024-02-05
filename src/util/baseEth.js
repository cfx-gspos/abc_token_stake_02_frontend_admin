import Contract from "web3-eth-contract";

let ethereum = window.ethereum;
Contract.setProvider(ethereum);

ethereum.on('accountsChanged', async function (acc) {
  // console.log('=====>'+accounts[0])
  console.log('=====>' + acc)
  location.reload()
})


/**
 * 创建合约调用
 * @param {tokenAddress} tokenAddress 
 * @param {abi} abi 
 */
export const getContract = (tokenAddress, abi) => {
  return new Contract(
    abi, tokenAddress
  );
}

/**
 * 全局
 * 获取当前地址
 */
export const getAddress = async () => {
  let accounts = await ethereum.enable();
  console.log(accounts[0])
  return Promise.resolve(accounts[0]);
}