import { registerUser, loginUser } from '@/backend/auth';
import { getAuth, deleteUser } from "firebase/auth";

describe('Firebase Authentication', () => {
  const testEmail = 'testuser@example.com';
  const testPassword = 'testpassword';

  afterAll(async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      await deleteUser(user);
    }
  });

  test('registerUser', async () => {
    const user = await registerUser(testEmail, testPassword);
    expect(user).toBeDefined();
    expect(user.email).toBe(testEmail);
  });

  test('loginUser', async () => {
    const user = await loginUser(testEmail, testPassword);
    expect(user).toBeDefined();
    expect(user.email).toBe(testEmail);
  });
});
