import { defineStore } from "pinia";
import axios from 'axios';
import bcrypt from 'bcryptjs';

const API_URL = 'http://127.0.0.1:8000';

export const useSessionStore = defineStore({
    id: 'session',
  
    state: () => ({
      sessionToken: null,
      username: "schnall"
    }),
    
    actions: {
        async login(username, password) {
            try {
              const response = await axios.post('http://127.0.0.1:8000/login', {
                username,
                password
              });
      
              this.sessionToken = response.data.access_token;
              this.username = username

            } catch (error) {
              console.error('Error:', error);
              this.sessionToken = null;
            }
        },

        async register(username, password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
                console.log(hashedPassword)
                return axios.post(`${API_URL}/register`, {username, password: hashedPassword,
            });
        },
          
        logout() {
              this.sessionToken = null;
              this.username = null;
            },
            
            
        async oldlogin(username, password) {
            const response = await axios.post(`${API_URL}/login`, {
                username,
            });
            
            const user = response.data;
            const isValidPassword = await bcrypt.compare(password, user.password);
            
            if (isValidPassword) {
                // Speichern Sie den Token oder andere Informationen, die Sie benötigen, im localStorage oder Vuex store.
                return user;
            } else {
                throw new Error('Invalid password');
            }
        }
},
})
