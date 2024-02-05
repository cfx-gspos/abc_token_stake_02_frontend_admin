import { formatUnits, parseUnits, formatEther } from 'ethers/lib/utils';
import { add } from 'lodash';

export function balanceToDecimal(s, decimals = 18) {
    return formatUnits(s, decimals);
}

export function etherToBalance(s) {
    return formatEther(s);
}

export function decimalToBalance(d, decimals = 18) {
    return parseUnits(String(d), decimals);
}

