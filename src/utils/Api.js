import axios from "axios";

// declare a request API mobile (sementara)
const ApiMobile = axios.create({
	baseURL: process.env.VUE_APP_API_URL_MOBILE,
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "Authorization",
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest",
	},
	mode: "no-cors",
	credentials: true,
	crossdomain: true,
});

// Sementara
ApiMobile.interceptors.request.use(
	(config) => {
		const LocalDataVuex = JSON.parse(
			window.localStorage.getItem("storeonklas")
		);
		// kalo url yang diakses dari koperasi ganti pake token koperasi
		if (config.url.indexOf("koperasi") !== -1) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${
					LocalDataVuex && LocalDataVuex.tokenKoperasi
						? LocalDataVuex.tokenKoperasi.token
						: LocalDataVuex
							? LocalDataVuex.userToken
							: ""
				}`,
			};
		} else if (
			config.url.indexOf("klaspay") !== -1 &&
			config.url.indexOf("koperasi") === -1 &&
			config.url.indexOf("klaspay-token") === -1
		) {
			// token untuk mutasi keuangan
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${
					LocalDataVuex && LocalDataVuex.tokenDanaPartisipasi
						? LocalDataVuex.tokenDanaPartisipasi.token
						: LocalDataVuex
							? LocalDataVuex.userToken
							: ""
				}`,
			};
		} else {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${(LocalDataVuex && LocalDataVuex.userToken) ||
				""}`,
			};
		}

		return config;
	},
	(error) => {
		// handle the error
		return Promise.reject(error);
	}
);

export function ApiGetRequestMobile(url, data = {}) {
	return ApiMobile.get(url, {
		params: data,
	})
		.then((response) => response)
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			return {
				error: (error.response && error.response.data.message) || error,
				errorList:
					error.response && error.response.data && error.response.data.errors,
			};
		});
}

export const ApiPostRequestMobile = (url, data = {}) => {
	return ApiMobile.post(url, data)
		.then((response) => response)
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			return {
				error: (error.response && error.response.data.message) || error,
				errorList:
					error.response && error.response.data && error.response.data.errors,
			};
		});
};

export function ApiPostMultipartMobile(url, data = {}) {
	return ApiMobile.post(url, data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	})
		.then((response) => response)
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			return {
				error:
					(error.response && error.response.data.error
						? error.response.data.error
						: error.response.data.message) || error,
				errorList:
					error.response && error.response.data && error.response.data.errors,
			};
		});
}

export function ApiPutMultipartMobile(url, data = {}) {
	return ApiMobile.put(url, data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	})
		.then((response) => response)
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			return {
				error:
					(error.response && error.response.data.error
						? error.response.data.error
						: error.response.data.message) || error,
				errorList:
					error.response && error.response.data && error.response.data.errors,
			};
		});
}

export default {
	ApiMobile: ApiMobile,
};
