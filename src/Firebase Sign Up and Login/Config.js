import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnhYvPqJU8sH-GY0v1v_mQ_p7kjlF5nJ4",
  authDomain: "react-email-4a62f.firebaseapp.com",
  projectId: "react-email-4a62f",
  storageBucket: "react-email-4a62f.appspot.com",
  messagingSenderId: "383942385654",
  appId: "1:383942385654:web:21ddeac9f342c103e171d7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)