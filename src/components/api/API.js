import axios from 'axios';
import { AsyncStorage, Platform } from 'react-native';
class API {
  constructor() {
    this.api = axios.create({
      // baseURL: 'http://124.81.225.71:2972/gps/ando/main/',
      baseURL: 'http://gps.merakjaya.co.id/ando/',
      // baseURL: 'https://andoheem.000webhostapp.com/', //PATH Online ando
      // baseURL: 'http://124.81.225.71:5757/tes_ando/api/signup.php', //PATH Sign UP
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  login(email, password) {
    // console.log('jalan gan', email);
    return this.api.post('/signup.php', {
      email: email,
      password: password,
    });
  }

  register({ nama_depan, nama_belakang, telepon, alamat, email, password }) {
    return this.api.post('/signup.php', {  nama_depan, nama_belakang, telepon, alamat, email, password  });
  }
}

export default API;