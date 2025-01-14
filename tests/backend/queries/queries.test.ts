import { fetchUsers, fetchClients, fetchSellers, fetchJobs, fetchGigs, fetchPayments, fetchServices, fetchSellerServices } from '@/backend/data/queries/index';
import { db } from '@/backend/utils/firebase/firebase';
import { collection, addDoc } from "firebase/firestore";

describe('Firebase Queries', () => {
  beforeAll(async () => {
    // Add test data
    await addDoc(collection(db, 'users'), { name: 'Test User', email: 'testuser@example.com' });
    await addDoc(collection(db, 'clients'), { name: 'Test Client', email: 'testclient@example.com' });
    await addDoc(collection(db, 'sellers'), { name: 'Test Seller', email: 'testseller@example.com' });
    await addDoc(collection(db, 'jobs'), { title: 'Test Job', description: 'Test Job Description' });
    await addDoc(collection(db, 'gigs'), { title: 'Test Gig', description: 'Test Gig Description' });
    await addDoc(collection(db, 'payments'), { amount: 100, currency: 'USD' });
    await addDoc(collection(db, 'services'), { name: 'Test Service', description: 'Test Service Description' });
    await addDoc(collection(db, 'sellerservices'), { name: 'Test Seller Service', description: 'Test Seller Service Description' });
  });

  test('fetchUsers', async () => {
    const users = await fetchUsers();
    expect(users).toContainEqual(expect.objectContaining({ name: 'Test User', email: 'testuser@example.com' }));
  });

  test('fetchClients', async () => {
    const clients = await fetchClients();
    expect(clients).toContainEqual(expect.objectContaining({ name: 'Test Client', email: 'testclient@example.com' }));
  });

  test('fetchSellers', async () => {
    const sellers = await fetchSellers();
    expect(sellers).toContainEqual(expect.objectContaining({ name: 'Test Seller', email: 'testseller@example.com' }));
  });

  test('fetchJobs', async () => {
    const jobs = await fetchJobs();
    expect(jobs).toContainEqual(expect.objectContaining({ title: 'Test Job', description: 'Test Job Description' }));
  });

  test('fetchGigs', async () => {
    const gigs = await fetchGigs();
    expect(gigs).toContainEqual(expect.objectContaining({ title: 'Test Gig', description: 'Test Gig Description' }));
  });

  test('fetchPayments', async () => {
    const payments = await fetchPayments();
    expect(payments).toContainEqual(expect.objectContaining({ amount: 100, currency: 'USD' }));
  });

  test('fetchServices', async () => {
    const services = await fetchServices();
    expect(services).toContainEqual(expect.objectContaining({ name: 'Test Service', description: 'Test Service Description' }));
  });

  test('fetchSellerServices', async () => {
    const sellerServices = await fetchSellerServices();
    expect(sellerServices).toContainEqual(expect.objectContaining({ name: 'Test Seller Service', description: 'Test Seller Service Description' }));
  });
});
