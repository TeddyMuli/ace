import { createUser, createClient, createSeller, createJob, createGig, createPayment, createService, createSellerService } from '@/backend/data/mutations/index';
import { db } from '@/backend/utils/firebase/firebase';
import { collection, deleteDoc, getDocs } from "firebase/firestore";

describe('Firebase Mutations', () => {
  afterAll(async () => {
    // Clean up the test data
    const collections = ['users', 'clients', 'sellers', 'jobs', 'gigs', 'payments', 'services', 'sellerservices'];
    for (const col of collections) {
      const snapshot = await getDocs(collection(db, col));
      snapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    }
  });

  test('createUser', async () => {
    const user = { name: 'Test User', email: 'testuser@example.com' };
    const userId = await createUser(user);
    expect(userId).toBeDefined();
  });

  test('createClient', async () => {
    const client = { name: 'Test Client', email: 'testclient@example.com' };
    const clientId = await createClient(client);
    expect(clientId).toBeDefined();
  });

  test('createSeller', async () => {
    const seller = { name: 'Test Seller', email: 'testseller@example.com' };
    const sellerId = await createSeller(seller);
    expect(sellerId).toBeDefined();
  });

  test('createJob', async () => {
    const job = { title: 'Test Job', description: 'Test Job Description' };
    const jobId = await createJob(job);
    expect(jobId).toBeDefined();
  });

  test('createGig', async () => {
    const gig = { title: 'Test Gig', description: 'Test Gig Description' };
    const gigId = await createGig(gig);
    expect(gigId).toBeDefined();
  });

  test('createPayment', async () => {
    const payment = { amount: 100, currency: 'USD' };
    const paymentId = await createPayment(payment);
    expect(paymentId).toBeDefined();
  });

  test('createService', async () => {
    const service = { name: 'Test Service', description: 'Test Service Description' };
    const serviceId = await createService(service);
    expect(serviceId).toBeDefined();
  });

  test('createSellerService', async () => {
    const sellerService = { name: 'Test Seller Service', description: 'Test Seller Service Description' };
    const sellerServiceId = await createSellerService(sellerService);
    expect(sellerServiceId).toBeDefined();
  });
});
