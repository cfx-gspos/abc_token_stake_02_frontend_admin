import Vue from 'vue'


Vue.prototype.$changeAddress = (addr) => {
	let temp = addr
	if (addr && addr.length == 42) {
		temp = addr.substring(0, 6) + "..." + addr.substring(36, 42)
	}
	return temp;
}

Vue.prototype.$formatDate = (timestamp) => {
	const date = new Date(parseInt(timestamp) * 1000);
	const year = date.getFullYear();
	const month = ("0" + (date.getMonth() + 1)).slice(-2);
	const day = ("0" + date.getDate()).slice(-2);
	const hours = ("0" + date.getHours()).slice(-2);
	const minutes = ("0" + date.getMinutes()).slice(-2);
	const seconds = ("0" + date.getSeconds()).slice(-2);
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

Vue.prototype.$bus = new Vue()