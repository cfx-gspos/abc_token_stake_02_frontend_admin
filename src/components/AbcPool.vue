<template>
  <el-container>
    <el-main>
      <div style="color: red;">
        <div>
          <span>pool: {{ $changeAddress(contract) }}</span>
        </div>
        <div>
          <span>ABC: {{ $changeAddress(abcCoin) }}</span>
        </div>
      </div>
      <div>
        <span style="color: royalblue;">当前钱包:{{ tempAddr }}</span>
        <el-button @click="initAddress()"> 连接钱包 </el-button>
      </div>
      <div>
        <div>池子中cfx数量: {{ restAmount }}</div>
        <div>池子中ABC数量: {{ totalAmount }}</div>
      </div>
      <div>
        <div>
          <div class="m-t-10">
            <el-select v-model="pool" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="flex">
            <el-button @click="getStartTimes()"> 开始时间 </el-button>
            <div class="m-t-10 m-l-5">
              <span>{{ startTime }}</span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex">
            <el-button @click="getLockTimes()"> 解锁时间 </el-button>
            <div class="m-t-10 m-l-5">
              <span>{{ lockTime }}</span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex">
            <el-input v-model="userAddress1" placeholder="请输入用户地址"></el-input>
            <el-button @click="getPoolRewardEarned()"> 获取所得 </el-button>
          </div>
          <div class="m-t-10 m-l-5">
            <span>{{ poolRewardEarned }}</span>
          </div>
        </div>
        <div>
          <div class="flex">
            <el-input v-model="userAddress2" placeholder="请输入用户地址"></el-input>
            <el-button @click="getBalanceOf()"> 获取用户抵押 </el-button>
          </div>
          <div class="m-t-10 m-l-5">
            <span>{{ balance }}</span>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        <div>新增奖励和拿取奖励功能</div>
        <el-divider></el-divider>
        <div>
          <el-date-picker v-model="setStartTime" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <div class="flex">
            <el-input v-model="amount" placeholder="请输入数量"></el-input>
            <el-button @click="newReward()"> 添加新的奖励 </el-button>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="flex">
          <el-input v-model="amount1" placeholder="请输入数量"></el-input>
          <el-button @click="restReward()"> 拿取剩余cfx奖励 </el-button>
        </div>
        <div class="flex">
          <el-input v-model="amount2" placeholder="请输入数量"></el-input>
          <el-button @click="restStake()"> 拿取抵押物 </el-button>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        <span>message:{{ msg }}</span>
      </div>
      <!-- <el-divider></el-divider> -->
      <!-- <div>
        <span>调试方法：</span>
        <div>
          <div class="flex">
            <el-input v-model="pool" placeholder="请输入池子"></el-input>
            <el-button @click="getBalanceOf()"> 获取用于抵押 </el-button>
          </div>
          <div class="m-t-10">
            <span>{{ balance }}</span>
          </div>
        </div>
        <div>
          <div class="flex">
            <el-input v-model="pool" placeholder="请输入池子"></el-input>
            <el-button @click="getCurPoolRewardRate()"> 获取当前池子速率 </el-button>
          </div>
          <div class="m-t-10">
            <span>{{ curPoolRewardRate }}</span>
          </div>
        </div>
        <div>
          <div class="flex">
            <el-input v-model="pool" placeholder="请输入池子"></el-input>
            <el-button @click="getBalanceOf()"> 获取用于抵押 </el-button>
          </div>
          <div class="m-t-10">
            <span>{{ balance }}</span>
          </div>
        </div>
      </div> -->
    </el-main>
  </el-container>
</template>

<script>
import { Loading } from "element-ui";
import { getAddress } from "@/util/baseEth.js";
import {
  getContractAddress,
  initAbcPool, getBalanceOf, hasMints, poolRewardCfxs,
  startTimes, lockTimes, getPoolRewardEarned,
  getBalance, getCurPoolRewardRate
  , setNewReward, getRestReward, getRestStake
} from "@/util/indexAbcPool.js";
import { balanceOf, initCoinContract } from "@/util/indexCoin.js";
import { balanceToDecimal, decimalToBalance } from '@/util/MathUtil.js'
export default {
  async created() {
    this.initAddress()
    await initCoinContract(this.abcCoin);
    await initAbcPool();
    this.contract = getContractAddress()
    await this.getBalance();
    await this.getAbcBalance();
  },
  name: "AbcPool",
  data() {
    return {
      totalAmount: 0,
      amount: 0,
      amount1: 0,
      amount2: 0,
      contract: "",
      userAddress1: "",
      userAddress2: "",
      balance: 0,
      pool: 1,
      abcCoin: '0xDcebdA2fE31EA70871a62FD584B6D692ABde9727',
      tempAddr: "",
      address: "",
      msg: "",
      restAmount: 0,
      poolRewardEarned: 0,
      curPoolRewardRate: 0,
      lockTime: 0,
      startTime: null,
      setStartTime: 0,
      options: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }],
    };
  },
  methods: {
    async getAbcBalance() {
      let res = await balanceOf(this.contract);
      console.log(`balanceOf: ${res}`);
      this.totalAmount = balanceToDecimal(res)
    },
    async initAddress() {
      this.address = '' + await getAddress()
      if (this.address && this.address.length >= 42) {
        this.tempAddr = this.address.substring(0, 6) + "..." + this.address.substring(36, 42)
      }
      console.log(`address: ${this.address}`)
    },
    async hasMints() {
      let res = await hasMints(this.pool);
      console.log(`hasMints: ${res}`);
      this.msg = res
    },
    async poolRewardCfxs() {
      let res = await poolRewardCfxs(this.pool);
      console.log(`poolRewardCfxs: ${res}`);
      this.msg = res
    },
    async getBalance() {
      let res = await getBalance();
      console.log(`getBalance: ${res}`);
      this.restAmount = balanceToDecimal(res)
    },
    async getStartTimes() {
      let res = await startTimes(this.pool);
      console.log(`startTimes: ${res}`);
      this.startTime = this.$formatDate(res)
    },
    async getLockTimes() {
      let res = await lockTimes(this.pool);
      console.log(`lockTimes: ${res}`);
      this.lockTime = this.$formatDate(res)
    },
    async approve() {
      let res = await approve(this.address, getContractAddress(), '1000000000000000000000000');
      console.log(`approve: ${res}`);
      this.msg = res
    },
    async allowance() {
      let res = await allowance(this.address, getContractAddress());
      console.log(`allowance: ${res}`);
      this.msg = res
    },
    async getBalanceOf() {
      let res = await getBalanceOf(this.userAddress2, this.pool);
      console.log(`getBalanceOf: ${res}`);
      this.balance = balanceToDecimal(res)
    },
    async getPoolRewardEarned() {
      console.log('=============');
      let res = await getPoolRewardEarned(this.userAddress1, this.pool);
      console.log(`getPoolRewardEarned: ${res}`);
      this.poolRewardEarned = balanceToDecimal(res)
    },
    async getCurPoolRewardRate() {
      let res = await getCurPoolRewardRate();
      console.log(`getCurPoolRewardRate: ${res}`);
      this.curPoolRewardRate = balanceToDecimal(res)
    },
    //------------
    async newReward() {
      let time = this.setStartTime.getTime() / 1000
      console.log(this.address);
      console.log(this.pool);
      console.log(this.amount);
      console.log(time);
      let res = await setNewReward(this.address, '' + this.amount, this.pool, time);
      console.log(`setNewReward: ${res}`);
      this.msg = res
    },
    async restReward() {
      let res = await getRestReward(this.address, '' + decimalToBalance(this.amount1));
      console.log(`getRestReward: ${res}`);
      this.msg = res
    },
    async restStake() {
      let res = await getRestStake(this.address, '' + decimalToBalance(this.amount2));
      console.log(`getRestStake: ${res}`);
      this.msg = res
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  margin-top: 20px;
}

.m-t-10 {
  margin-top: 10px;
}

.m-t-5 {
  margin-top: 5px;
}

.m-l-5 {
  margin-left: 10px;
}

.el-button {
  /* transform: scale(1); */
}

.el-button--mini.is-circle {
  padding: 2px;
}

.colume-balance {
  padding: 10px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-top: 10px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>