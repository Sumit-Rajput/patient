import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDpgcPtLTU2BGS7xk5IcTlR6sny76HBy1g',
  authDomain: 'patient-react-75c13.firebaseapp.com',
  databaseURL: 'https://patient-react-75c13.firebaseio.com',
  projectId: 'patient-react-75c13',
  storageBucket: 'patient-react-75c13.appspot.com',
  messagingSenderId: '802778521567',
};


firebase.initializeApp(config);
const database = firebase.database();

export default database;
