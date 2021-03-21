import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA3l7LTUDe6loZics9NuNG0Esa9ytlH-Uw",
    authDomain: "crypto-1c1e3.firebaseapp.com",
    projectId: "crypto-1c1e3",
    storageBucket: "crypto-1c1e3.appspot.com",
    messagingSenderId: "61276757378",
    appId: "1:61276757378:web:102d9b28f4c753d6d9439b"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;