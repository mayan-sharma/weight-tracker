import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCDBzO4Gyz_7VkjDIaXj8guNZ9P_v_Hxc",
    authDomain: "fleetech-weight.firebaseapp.com",
    projectId: "fleetech-weight",
    storageBucket: "fleetech-weight.appspot.com",
    messagingSenderId: "658680179657",
    appId: "1:658680179657:web:66ab071f2695b3f46f5618"
};

firebase.initializeApp(firebaseConfig);

export default firebase;