import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore, query, where, doc, getDoc, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

const productsRef = collection(db, 'products')
const categoriesRef = collection(db, 'categories')
const ordersRef = collection(db, 'orders')



export const getItems = (categoryName) => getDocs(categoryName? query(productsRef, where('category','==', categoryName)) : productsRef)
export const getItem =(bookId) => getDoc(doc(productsRef, bookId));


export const getCategories = () => getDocs(categoriesRef);

export const writeNewOrder = (order) => addDoc(ordersRef, order);




