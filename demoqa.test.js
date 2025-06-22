const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const BASE_URL = 'https://demoqa.com/Account/v1';
const headers = { 'Content-Type': 'application/json' };

const authHeaders = (token) => ({ ...headers, Authorization: `Bearer ${token}` });

let userId = null;
let accessToken = null;

const testUser = {
  userName: `user_${uuidv4().slice(0, 6)}`,
  password: 'TestPass123!',
};

const createUser = (user) => axios.post(`${BASE_URL}/User`, user, { headers });
const generateToken = (user) => axios.post(`${BASE_URL}/GenerateToken`, user, { headers });
const getUser = (id, token) => axios.get(`${BASE_URL}/User/${id}`, { headers: authHeaders(token) });
const deleteUser = (id, token) => axios.delete(`${BASE_URL}/User/${id}`, { headers: authHeaders(token) });

describe('DemoQA API Integration Tests', () => {
  test('Create a new user successfully', async () => {
    const response = await createUser(testUser);
    expect(response.status).toBe(201);
    expect(response.data.username).toBe(testUser.userName);
    expect(response.data.userID).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
    userId = response.data.userID;
  });

  test('Fail to create user with missing password', async () => {
    try {
      await createUser({ userName: 'noPassword' });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toBe('UserName and Password required.');
    }
  });

  test('Generate token with valid credentials', async () => {
    const response = await generateToken(testUser);
    expect(response.status).toBe(200);
    expect(response.data.token).toBeDefined();
    accessToken = response.data.token;
  });

  test('Token generation fails with incorrect password', async () => {
    const invalidCreds = { ...testUser, password: 'WrongPass1!' };
    const response = await generateToken(invalidCreds);
    expect(response.status).toBe(200);
    expect(response.data.status).toBe('Failed');
    expect(response.data.result).toBe('User authorization failed.');
  });

  test('Fetch user details with valid token', async () => {
    const response = await getUser(userId, accessToken);
    expect(response.status).toBe(200);
    expect(response.data.userId).toBe(userId);
    expect(response.data.username).toBe(testUser.userName);
  });

  test('Attempt to get non-existent user returns 401', async () => {
    try {
      await getUser('fake-id-123', accessToken);
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.message).toBe('User not found!');
    }
  });

  test('Successfully delete existing user', async () => {
    const response = await deleteUser(userId, accessToken);
    expect(response.status).toBe(204);
  });

  test('Fail to delete invalid user ID', async () => {
    const response = await deleteUser('invalid-id', 'wrongToken');
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('User Id not correct!');
  });
});
