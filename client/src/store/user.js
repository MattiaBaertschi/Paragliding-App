import { defineStore } from "pinia";
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';
const url = 'https://hoemknoebi.internet-box.ch/api';

export const useSessionStore = defineStore({
    id: 'session',
  
    state: () => ({
      sessionToken: null,
      username: null,
    }),
    
    actions: {
        async login(username, password) {
            try {
              const formData = new URLSearchParams();
                formData.append('username', username);
                formData.append('password', password);
                formData.append('grant_type', 'password'); // Wenn die API OAuth2 verwendet, ist dies möglicherweise erforderlich

              const response = await axios.post(`${url}/login`, formData,
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

        async register(username, email, password, firstname, lastname, shv_nr) {
          try {  
            const requestData = {
              username: username,
              e_mail: email,
              password: password,
              firstname: firstname,
              lastname: lastname,
              shv_nr: shv_nr,
              grant_type: 'password'
            };
            
            const register_response = await axios.post(`${url}/register`, null, {
              params: requestData
            });
            
            console.log("Registrierung erfolgreich", register_response);
          }
          catch(error) {
            console.log(error);
            throw error;
          }
        },
           
        logout() {
              this.sessionToken = null;
              this.username = null;
            },

},
})
