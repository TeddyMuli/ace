import { db } from '@/backend/utils/firebase/firebase';
import { collection, getDocs } from "firebase/firestore"; 

// Fetch functions
export async function fetchUsers() {
  const snapshot = await getDocs(collection(db, 'users'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchClients() {
  const snapshot = await getDocs(collection(db, 'clients'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchSellers() {
  const snapshot = await getDocs(collection(db, 'sellers'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchJobs() {
  const snapshot = await getDocs(collection(db, 'jobs'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchGigs() {
  const snapshot = await getDocs(collection(db, 'gigs'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchPayments() {
  const snapshot = await getDocs(collection(db, 'payments'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchServices() {
  const snapshot = await getDocs(collection(db, 'services'));
  return snapshot.docs.map(doc => doc.data());
}

export async function fetchSellerServices() {
  const snapshot = await getDocs(collection(db, 'sellerservices'));
  return snapshot.docs.map(doc => doc.data());
}