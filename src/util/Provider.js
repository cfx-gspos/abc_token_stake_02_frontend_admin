 import { ethers } from 'ethers';
 
export default class Providers {
 
    static isMetaMaskProvider () {
        return Boolean( window.web3 && window.web3.currentProvider );
    }
 
    static createProvider () {
        if (Providers.isMetaMaskProvider()) {
            // 基于浏览器插件MetaMask插件节点
            return new ethers.providers.Web3Provider( window.web3.currentProvider );
        } else {
            return new ethers.providers.JsonRpcProvider(
                'https://ropsten.infura.io/v3/b372dec7f4d94e5d9570b3b071b8dd31');
        }
    }
}