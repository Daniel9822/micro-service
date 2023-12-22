const app = require('../index')
const supertest = require('supertest')

describe("[characters]", () => {
  test("should return all characters", async () => {
    const response = await supertest(app).get('/db/characters')

    expect(response.statusCode).toBe(200)
  });
  
});
