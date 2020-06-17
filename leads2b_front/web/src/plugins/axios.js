import Vue from 'vue';
import axios from 'axios';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:3000',
            header: {
                'Authorization': `Bearer ${sessionStorage.getItem('user-token')}`  || ''
            }
        });
        
        Vue.prototype.$http.interceptors.request.use(config => {
            if (config.headers) {
                config.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('user-token')}`  || ''
            }
            return config;
        }, error => Promise.reject(error));
        
        Vue.prototype.$http.interceptors.response.use(res => {
            if (res.data && res.data.token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
            }
            return res;
        }, error => Promise.reject(error));
    }
})