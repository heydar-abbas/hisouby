import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
	const rc = useRuntimeConfig();
	
	const firebaseConfig = {
		apiKey: rc.public.FIREBASE_API_KEY,
		authDomain: rc.public.FIREBASE_AUTH_DOMAIN,
		projectId: rc.public.FIREBASE_PROJECT_ID,
		storageBucket: rc.public.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: rc.public.FIREBASE_MESSAGING_SENDER_ID,
		appId: rc.public.FIREBASE_APP_ID,
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	return {
		provide: { db, firebaseApp: app },
	};
});
