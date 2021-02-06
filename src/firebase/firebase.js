import app from 'firebase/app';
import 'firebase/firestore';
// import app from '@react-native-firebase/app';
// import '@react-native-firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    //si no hay app inicializada
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
      app.firestore().settings({experimentalForceLongPolling: true});
    }

    this.db = app.firestore();
  }
}

const firebase = new Firebase();
export default firebase;
