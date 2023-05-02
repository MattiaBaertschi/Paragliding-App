import axios from 'axios';
import bcrypt from 'bcryptjs';

const API_URL = 'http://127.0.0.1:8000';

async function register(username, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)
  return axios.post(`${API_URL}/register`, {
    username,
    password: hashedPassword,
  });
}

async function login(username, password) {
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

export default {
  register,
  login,
};
