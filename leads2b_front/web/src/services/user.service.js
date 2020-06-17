import axios from 'axios';

export default {
    pendingSigninRequest: false,
    
    async signUp (name, email, password) {
        const res = await axios.post("/signup", {
            name,
            email,
            password
        });
        return res.data;
    },
    
    async signIn (email, password) {
        const res = await axios.post("/signin", {
            email,
            password
        });
        const token = res.data.token;
        sessionStorage.setItem('user-token', 'bearer ' + token);
    },
    
    async validateToken (token, id) {
        console.log(this.$http)
        const res = await axios.post("/validate_login", {
            token,
            id
        });
        
        return res.token;
    }
    
}