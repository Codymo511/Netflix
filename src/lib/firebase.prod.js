import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';



const config = {
    apiKey: "AIzaSyCBs_Ei6fVuO1wk3fM5xkapfvw6tPF9Rrw",
    authDomain: "mynetflix-93ded.firebaseapp.com",
    databaseURL: "https://mynetflix-93ded.firebaseio.com",
    projectId: "mynetflix-93ded",
    storageBucket: "mynetflix-93ded.appspot.com",
    messagingSenderId: "1069482869324",
    appId: "1:1069482869324:web:e528eb3f83a81d71e7aae9"
  };











const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };