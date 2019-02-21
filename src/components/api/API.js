import axios from 'axios';
import { AsyncStorage, Platform } from 'react-native';
class API {
    constructor() {
      this.api = axios.create({
        baseURL: 'http://124.81.225.71:5757/tes_ando/api/',        
        // baseURL: 'http://124.81.225.71:5757/tes_ando/api/login.php', //PATH Login
        // baseURL: 'http://124.81.225.71:5757/tes_ando/api/signup.php', //PATH Sign UP
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    }
    getDeviceType() {
        return this.api.get('/devices/type');
      }
}