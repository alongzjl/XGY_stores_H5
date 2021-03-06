import 'whatwg-fetch';

const common = {};

common.getAccessToken = function () {
	function getQueryString(name) {
		const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
		const r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	let accessToken = sessionStorage.getItem('access_token');
	if (!accessToken) {
		accessToken = getQueryString('access_token');
	}
	accessToken = 'along123456';
	return accessToken;
};
  

export default class Fetch {
	static remote(url, config, success, failed) {
		const defaultConfig = {
			method: 'GET'
		};
		const newConfig = Object.assign({}, defaultConfig, config);

		fetch(url, newConfig).then(response => response.json()).then(result => {
			success(result);
		}).catch(error => {
			if (failed) {
				failed(error)
			}
		})
	}

	static get(url, config) {
		let id = window.uif.userInfo.id || '1'
		if (id) url += ((/\?/.test(url)? '&': '?') + 'userId='+id)
		return new Promise((resolve, reject) => {
			const newConfig = Object.assign({}, {
				method: 'GET'
			}, config)
			Fetch.remote(url, newConfig, resolve, reject);
		});
	}

	static postLogin(url, config) {
		return new Promise((resolve, reject) => {
			Fetch.remote(url, {
				method: 'POST',
				body: JSON.stringify(config),
				headers: {
					'Content-Type': 'application/json;charset=UTF-8'
				},
				credentials: 'include'
			}, resolve, reject)
		})
	}
	static post(url, config) {
		let id = window.uif.userInfo.id || '1'
		if (id) config.userId = id
		return new Promise((resolve, reject) => {
			Fetch.remote(url, {
				method: 'POST',
				body: new URLSearchParams(config),
			}, resolve, reject)
		})
	}

	static postFile(url, data) {
		return new Promise((resolve, reject) => {
			const newConfig = Object.assign({}, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
				body: new URLSearchParams(data)
			}); 
			Fetch.remote(url, newConfig, resolve, reject);
		});
	}
	static postJSON(url, data) {
		return new Promise((resolve, reject) => {
			const newConfig = Object.assign({}, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data),
				//credentials: 'include'
			})
			Fetch.remote(url, newConfig, resolve, reject);
		});
	} 

	static del(url, config) {
		return new Promise((resolve, reject) => {
			const newConfig = Object.assign({}, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${common.getAccessToken()}` }
			}, config);
			Fetch.remote(url, newConfig, resolve, reject);
		});
	}

	//图片上传 
	static postJSONIMG(url, data) {
		return new Promise((resolve, reject) => {
			const newConfig = Object.assign({}, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
				body: new URLSearchParams(data), 
				credentials: 'include'
			})
			Fetch.remote(url, newConfig, resolve, reject);
		});
	}

	static putJSON(url, data) {
		return new Promise((resolve, reject) => {
			const newConfig = Object.assign({}, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${common.getAccessToken()}` },
				body: JSON.stringify(data)
			});
			Fetch.remote(url, newConfig, resolve, reject);
		});
	}
}
