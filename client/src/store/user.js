import { defineStore } from "pinia";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { h } from "vue";

const API_URL = 'http://127.0.0.1:8000';
const url = 'https://hoemknoebi.internet-box.ch/api/login';

export const useSessionStore = defineStore({
    id: 'session',
  
    state: () => ({
      sessionToken: null,
      username: null,
    }),
    
    actions: {
        async login(username, password) {
            try {
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);

              const formData = new URLSearchParams();
                formData.append('username', username);
                //formData.append('password', hashedPassword);
                formData.append('password', password)
                formData.append('grant_type', 'password'); // Wenn die API OAuth2 verwendet, ist dies möglicherweise erforderlich

              const response = await axios.post(url, formData,
                {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                })
      
              this.sessionToken = response.data.access_token;
              this.username = username

            } 
            catch (error) {
              console.error('Error:', error);
              this.sessionToken = null;
              throw error; // Fehler weiterleiten
            }
        },

        async register(username, password) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
                console.log(hashedPassword)
                return axios.post(`${url}/register`, {username, password: hashedPassword,
            });
          }
          catch {
            throw error;
          }

        },
          
        logout() {
              this.sessionToken = null;
              this.username = null;
            },

},
})
