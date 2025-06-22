const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const BASE_URL = 'https://api.simpletest.com/users';
const userId = 10;
const userUrl = `${BASE_URL}/${userId}`;

const userData = {
  id: 10,
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  username: 'janesmith',
  phone: '123-456-7890',
  address: {
    street: '100 Main St',
    city: 'Springfield',
    state: 'MA',
    zipcode: '12345',
    country: 'USA',
  },
  company: {
    name: 'Acme Inc.',
    industry: 'Consulting',
    position: 'Analyst',
  },
  dob: '1992-11-30',
  profile_picture_url: 'https://example.com/images/jane.jpg',
  is_active: true,
  created_at: '2024-01-01T08:00:00Z',
  updated_at: '2025-01-01T08:00:00Z',
  preferences: {
    language: 'en',
    timezone: 'America/New_York',
    notifications_enabled: true,
  },
};

describe('Mocked User API Responses', () => {
  beforeAll(() => {
    mock.onGet(userUrl).reply(200, userData);
    mock.onGet(`${BASE_URL}/404`).reply(404, { error: 'Not Found' });
    mock.onGet(`${BASE_URL}/403`).reply(403, { error: 'Forbidden' });
    mock.onGet(`${BASE_URL}/204`).reply(204);
    mock.onGet(`${BASE_URL}/502`).reply(502, { error: 'Bad Gateway' });
  });

  test('Retrieve user details successfully', async () => {
    const response = await axios.get(userUrl);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 10);
    expect(response.data).toHaveProperty('email', 'jane.smith@example.com');
    expect(response.data.preferences).toHaveProperty('language');
    expect(typeof response.data.created_at).toBe('string');
  });

  test('Handles 404 Not Found', async () => {
    try {
      await axios.get(`${BASE_URL}/404`);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toHaveProperty('error', 'Not Found');
    }
  });

  test('Handles 403 Forbidden', async () => {
    try {
      await axios.get(`${BASE_URL}/403`);
    } catch (error) {
      expect(error.response.status).toBe(403);
      expect(error.response.data).toHaveProperty('error', 'Forbidden');
    }
  });

  test('Handles 204 No Content', async () => {
    const response = await axios.get(`${BASE_URL}/204`);
    expect(response.status).toBe(204);
    expect(response.data).toBeUndefined();
  });

  test('Handles 502 Bad Gateway', async () => {
    try {
      await axios.get(`${BASE_URL}/502`);
    } catch (error) {
      expect(error.response.status).toBe(502);
      expect(error.response.data).toHaveProperty('error', 'Bad Gateway');
    }
  });
});
