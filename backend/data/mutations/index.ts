import { db } from '@/backend/utils/firebase/firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

export async function createUser(user: any) {
  const userRef = await addDoc(collection(db, 'users'), user);
  return userRef.id;
}

export async function createClient(client: any) {
  const clientRef = await addDoc(collection(db, 'clients'), client);
  return clientRef.id;
}

export async function createSeller(seller: any) {
  const sellerRef = await addDoc(collection(db, 'sellers'), seller);
  return sellerRef.id;
}

export async function createJob(job: any) {
  const jobRef = await addDoc(collection(db, 'jobs'), job);
  return jobRef.id;
}

export async function createGig(gig: any) {
  const gigRef = await addDoc(collection(db, 'gigs'), gig);
  return gigRef.id;
}

export async function createPayment(payment: any) {
  const paymentRef = await addDoc(collection(db, 'payments'), payment);
  return paymentRef.id;
}

export async function createService(service: any) {
  const serviceRef = await addDoc(collection(db, 'services'), service);
  return serviceRef.id;
}

export async function createSellerService(sellerService: any) {
  const sellerServiceRef = await addDoc(collection(db, 'sellerservices'), sellerService);
  return sellerServiceRef.id;
}
