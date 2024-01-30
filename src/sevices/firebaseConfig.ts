
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBpC4ZzPr7mCDMDona4MDrTBSXz8cA3YqI",
    authDomain: "whatsappclone-a2278.firebaseapp.com",
    projectId: "whatsappclone-a2278",
    storageBucket: "whatsappclone-a2278.appspot.com",
    messagingSenderId: "564136346625",
    appId: "1:564136346625:web:146f58b945ecaece10ec00"
  };
  

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };