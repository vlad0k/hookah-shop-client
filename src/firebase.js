import * as firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAZaWQROq5tZzH7BeeHR5iCLg8TNqcNgUU",
    authDomain: "hookah-shop-15a3b.firebaseapp.com",
    databaseURL: "https://hookah-shop-15a3b.firebaseio.com",
    projectId: "hookah-shop-15a3b",
    storageBucket: "hookah-shop-15a3b.appspot.com",
    messagingSenderId: "829764303050",
    appId: "1:829764303050:web:f80b8430be858fc54ddc33"
}

export const app = firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage(app)