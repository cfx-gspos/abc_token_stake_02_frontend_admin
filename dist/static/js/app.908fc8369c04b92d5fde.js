webpackJsonp([1],{0:function(e,t){},1:function(e,t){},2:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-link",{attrs:{to:"/"}},[this._v("HOME")]),this._v(" "),t("div",{attrs:{id:"app"}},[t("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("sXgX")},null,null).exports,o=n("/ocq"),r=n("zL8q"),p=n.n(r),l=n("8fid"),u=n.n(l);let d=window.ethereum;u.a.setProvider(d),d.on("accountsChanged",async function(e){console.log("=====>"+e),location.reload()});const y=(e,t)=>new u.a(t,e);var c=n("Vm/i"),m=n.n(c),b=n("Uhq0");let v;var w=n("qZ3O"),f=n.n(w);let T;const g=async e=>(console.log(`balanceOf: ${g}`),await T.methods.balanceOf(e).call());var h=n("75Mt");n("M4fF");function _(e,t=18){return Object(h.formatUnits)(e,t)}function M(e,t=18){return Object(h.parseUnits)(String(e),t)}var x={async created(){this.initAddress(),await(async e=>{T=await y(e,f.a)})(this.abcCoin),await(async()=>{null==v&&(v=await y("0x1bA1C8dEB5d7d2786cDF42B74Dd4Ea0Acb0C40D2",m.a))})(),this.contract="0x1bA1C8dEB5d7d2786cDF42B74Dd4Ea0Acb0C40D2",await this.getBalance(),await this.getAbcBalance()},name:"AbcPool",data:()=>({totalAmount:0,amount:0,amount1:0,amount2:0,contract:"",userAddress1:"",userAddress2:"",balance:0,pool:1,abcCoin:"0x905f2202003453006eaf975699545f2e909079b8",tempAddr:"",address:"",msg:"",restAmount:0,poolRewardEarned:0,curPoolRewardRate:0,lockTime:0,startTime:null,setStartTime:0,options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]}),methods:{async getAbcBalance(){let e=await g(this.contract);console.log(`balanceOf: ${e}`),this.totalAmount=_(e)},async initAddress(){this.address=""+await(async()=>{let e=await d.enable();return console.log(e[0]),Promise.resolve(e[0])})(),this.address&&this.address.length>=42&&(this.tempAddr=this.address.substring(0,6)+"..."+this.address.substring(36,42)),console.log(`address: ${this.address}`)},async hasMints(){let e=await(async(e,t)=>(console.log("hasMints"),await v.methods.hasMints(e,t).call()))(this.pool);console.log(`hasMints: ${e}`),this.msg=e},async poolRewardCfxs(){let e=await(async(e,t)=>(console.log("poolRewardCfxs"),await v.methods.poolRewardCfxs(e,t).call()))(this.pool);console.log(`poolRewardCfxs: ${e}`),this.msg=e},async getBalance(){let e=await(async()=>(console.log("getBalance"),await v.methods.getBalance().call()))();console.log(`getBalance: ${e}`),this.restAmount=_(e)},async getStartTimes(){let e=await(async e=>(console.log("startTimes"),await v.methods.startTimes(e).call()))(this.pool);console.log(`startTimes: ${e}`),this.startTime=this.$formatDate(e)},async getLockTimes(){let e=await(async e=>(console.log("lockTimes"),await v.methods.lockTimes(e).call()))(this.pool);console.log(`lockTimes: ${e}`),this.lockTime=this.$formatDate(e)},async approve(){let e=await approve(this.address,"0x1bA1C8dEB5d7d2786cDF42B74Dd4Ea0Acb0C40D2","1000000000000000000000000");console.log(`approve: ${e}`),this.msg=e},async allowance(){let e=await allowance(this.address,"0x1bA1C8dEB5d7d2786cDF42B74Dd4Ea0Acb0C40D2");console.log(`allowance: ${e}`),this.msg=e},async getBalanceOf(){let e=await(async(e,t)=>(console.log("getBalanceOf"),await v.methods.balanceOf(e,t).call()))(this.userAddress2,this.pool);console.log(`getBalanceOf: ${e}`),this.balance=_(e)},async getPoolRewardEarned(){console.log("=============");let e=await(async(e,t)=>(console.log("getPoolRewardEarned"),await v.methods.poolRewardEarned(e,t).call()))(this.userAddress1,this.pool);console.log(`getPoolRewardEarned: ${e}`),this.poolRewardEarned=_(e)},async getCurPoolRewardRate(){let e=await(async e=>(console.log("getCurPoolRewardRate"),await v.methods.getCurPoolRewardRate(e).call()))();console.log(`getCurPoolRewardRate: ${e}`),this.curPoolRewardRate=_(e)},async newReward(){let e=this.setStartTime.getTime()/1e3;console.log(this.address),console.log(this.pool),console.log(this.amount),console.log(e);let t=await(async(e,t,n,a)=>(console.log("setNewReward"),console.log(`value: ${t}`),console.log(`value parseEther: ${b.ethers.utils.parseEther(t)}`),console.log(`value 0x: ${b.BigNumber.from(b.ethers.utils.parseEther(t)).toHexString()}`),await v.methods.setNewReward(""+b.ethers.utils.parseEther(t),n,a).send({from:e,value:b.BigNumber.from(b.ethers.utils.parseEther(t)).toHexString()})))(this.address,""+this.amount,this.pool,e);console.log(`setNewReward: ${t}`),this.msg=t},async restReward(){let e=await(async(e,t)=>(console.log("getRestReward",e,t),await v.methods.getRestReward(t).send({from:e})))(this.address,""+M(this.amount1));console.log(`getRestReward: ${e}`),this.msg=e},async restStake(){let e=await(async(e,t)=>(console.log("getRestStake"),await v.methods.getRestStake(t).send({from:e})))(this.address,""+M(this.amount2));console.log(`getRestStake: ${e}`),this.msg=e}}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-main",[n("div",{staticStyle:{color:"red"}},[n("div",[n("span",[e._v("pool: "+e._s(e.$changeAddress(e.contract)))])]),e._v(" "),n("div",[n("span",[e._v("ABC: "+e._s(e.$changeAddress(e.abcCoin)))])])]),e._v(" "),n("div",[n("span",{staticStyle:{color:"royalblue"}},[e._v("当前钱包:"+e._s(e.tempAddr))]),e._v(" "),n("el-button",{on:{click:function(t){return e.initAddress()}}},[e._v(" 连接钱包 ")])],1),e._v(" "),n("div",[n("div",[e._v("池子中cfx数量: "+e._s(e.restAmount))]),e._v(" "),n("div",[e._v("池子中ABC数量: "+e._s(e.totalAmount))])]),e._v(" "),n("div",[n("div",[n("div",{staticClass:"m-t-10"},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pool,callback:function(t){e.pool=t},expression:"pool"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),n("div",{staticClass:"flex"},[n("el-button",{on:{click:function(t){return e.getStartTimes()}}},[e._v(" 开始时间 ")]),e._v(" "),n("div",{staticClass:"m-t-10 m-l-5"},[n("span",[e._v(e._s(e.startTime))])])],1)]),e._v(" "),n("div",[n("div",{staticClass:"flex"},[n("el-button",{on:{click:function(t){return e.getLockTimes()}}},[e._v(" 解锁时间 ")]),e._v(" "),n("div",{staticClass:"m-t-10 m-l-5"},[n("span",[e._v(e._s(e.lockTime))])])],1)]),e._v(" "),n("div",[n("div",{staticClass:"flex"},[n("el-input",{attrs:{placeholder:"请输入用户地址"},model:{value:e.userAddress1,callback:function(t){e.userAddress1=t},expression:"userAddress1"}}),e._v(" "),n("el-button",{on:{click:function(t){return e.getPoolRewardEarned()}}},[e._v(" 获取所得 ")])],1),e._v(" "),n("div",{staticClass:"m-t-10 m-l-5"},[n("span",[e._v(e._s(e.poolRewardEarned))])])]),e._v(" "),n("div",[n("div",{staticClass:"flex"},[n("el-input",{attrs:{placeholder:"请输入用户地址"},model:{value:e.userAddress2,callback:function(t){e.userAddress2=t},expression:"userAddress2"}}),e._v(" "),n("el-button",{on:{click:function(t){return e.getBalanceOf()}}},[e._v(" 获取用户抵押 ")])],1),e._v(" "),n("div",{staticClass:"m-t-10 m-l-5"},[n("span",[e._v(e._s(e.balance))])])])]),e._v(" "),n("el-divider"),e._v(" "),n("div",[n("div",[e._v("新增奖励和拿取奖励功能")]),e._v(" "),n("el-divider"),e._v(" "),n("div",[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.setStartTime,callback:function(t){e.setStartTime=t},expression:"setStartTime"}}),e._v(" "),n("div",{staticClass:"flex"},[n("el-input",{attrs:{placeholder:"请输入数量"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),e._v(" "),n("el-button",{on:{click:function(t){return e.newReward()}}},[e._v(" 添加新的奖励 ")])],1)],1),e._v(" "),n("el-divider"),e._v(" "),n("div",{staticClass:"flex"},[n("el-input",{attrs:{placeholder:"请输入数量"},model:{value:e.amount1,callback:function(t){e.amount1=t},expression:"amount1"}}),e._v(" "),n("el-button",{on:{click:function(t){return e.restReward()}}},[e._v(" 拿取剩余cfx奖励 ")])],1),e._v(" "),n("div",{staticClass:"flex"},[n("el-input",{attrs:{placeholder:"请输入数量"},model:{value:e.amount2,callback:function(t){e.amount2=t},expression:"amount2"}}),e._v(" "),n("el-button",{on:{click:function(t){return e.restStake()}}},[e._v(" 拿取抵押物 ")])],1)],1),e._v(" "),n("el-divider"),e._v(" "),n("div",[n("span",[e._v("message:"+e._s(e.msg))])])],1)],1)},staticRenderFns:[]};var k=n("VU/8")(x,R,!1,function(e){n("fj/i")},null,null).exports;a.default.use(o.a);var A=new o.a({routes:[{path:"/abcpool",name:"abcpool",component:k},{path:"/",name:"abcpool",component:k}]});n("tvR6");a.default.prototype.$changeAddress=(e=>{let t=e;return e&&42==e.length&&(t=e.substring(0,6)+"..."+e.substring(36,42)),t}),a.default.prototype.$formatDate=(e=>{const t=new Date(1e3*parseInt(e));return`${t.getFullYear()}-${("0"+(t.getMonth()+1)).slice(-2)}-${("0"+t.getDate()).slice(-2)} ${("0"+t.getHours()).slice(-2)}:${("0"+t.getMinutes()).slice(-2)}:${("0"+t.getSeconds()).slice(-2)}`}),a.default.prototype.$bus=new a.default,a.default.config.productionTip=!1,a.default.use(p.a),new a.default({el:"#app",router:A,components:{App:s},template:"<App/>"})},"Vm/i":function(e,t){e.exports=[{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOperator",type:"address"},{indexed:!0,internalType:"address",name:"newOperator",type:"address"}],name:"OperatorTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"_pool",type:"uint256"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"PoolRewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_pool",type:"uint256"},{indexed:!1,internalType:"uint256",name:"oldValue",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rewardRate",type:"uint256"}],name:"PoolRewardRateChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"PresentAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"_pool",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"_pool",type:"uint256"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"Withdrawn",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[{internalType:"address",name:"_miner",type:"address"}],name:"addMiner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"_pool",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pool",type:"uint256"}],name:"exit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"_pool",type:"uint256"}],name:"get2222",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pool",type:"uint256"}],name:"getCurPoolRewardRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pool",type:"uint256"}],name:"getPoolReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"getRestReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"getRestStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hasInit",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasMints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_startMiningTime",type:"uint256"},{internalType:"address",name:"_stakingPowerAddress",type:"address"}],name:"initStakingPool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isOperator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lockTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"miners",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"operator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"poolMints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"poolRewardCfxs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"_pool",type:"uint256"}],name:"poolRewardEarned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"poolRewardRates",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"pools",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rateLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_miner",type:"address"}],name:"removeMiner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rewardLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rewardPerTokenStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_newReward",type:"uint256"},{internalType:"uint256",name:"_pool",type:"uint256"},{internalType:"uint256",name:"_startTime",type:"uint256"}],name:"setNewReward",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"_pool",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stakingPowerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"startTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOperator_",type:"address"}],name:"transferOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"userPoolRewardPerTokenPaid",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}]},eajV:function(e,t){e.exports={name:"websocket",description:"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",keywords:["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],author:"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",contributors:["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],version:"1.0.32",repository:{type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},homepage:"https://github.com/theturtle32/WebSocket-Node",engines:{node:">=4.0.0"},dependencies:{bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},devDependencies:{"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},config:{verbose:!1},scripts:{test:"tape test/unit/*.js",gulp:"gulp"},main:"index",directories:{lib:"./lib"},browser:"lib/browser.js",license:"Apache-2.0"}},"fj/i":function(e,t){},qZ3O:function(e,t){e.exports=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOperator",type:"address"},{indexed:!0,internalType:"address",name:"newOperator",type:"address"}],name:"OperatorTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isOperator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"",type:"address"}],name:"miners",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"operator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOperator_",type:"address"}],name:"transferOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_miner",type:"address"}],name:"addMiner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_miner",type:"address"}],name:"removeMiner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"}]},sXgX:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.908fc8369c04b92d5fde.js.map