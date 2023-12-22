const app = require('../index')
const supertest = require('supertest')
const { createItem } = require('./helpers/characters')
const Character = require('../src/models/characters')

const PATH = '/db/characters'
let id = ''

beforeAll(async () => {
  await Character.deleteMany()
  const { _id } = await Character.create(createItem)
  id = _id.toString()
})

afterAll((done) => {
  done()
})

describe('[characters]', () => {
  test('should return all characters', async () => {
    const response = await supertest(app).get(PATH)

    const { error, data } = response.body
    console.log(data)
    expect(response.statusCode).toBe(200)
    expect(error).toEqual(false)
    expect(data).toHaveLength(1)
  })

  test('should create a new character', async () => {
    const response = await supertest(app).post(PATH).send(createItem)

    const { error, data } = response.body

    expect(response.statusCode).toBe(201)
    expect(error).toEqual(false)
    expect(data).toHaveProperty('createdAt')
    expect(data).toHaveProperty('name', createItem.name)
  })

  test('I should can update character', async () => {
    const response = await supertest(app).put(`${PATH}/${id}`).send({
      name: 'prueba'
    })

    const { error, data } = response.body;

    expect(response.statusCode).toBe(200)
    expect(error).toEqual(false)
    expect(data).toHaveProperty('name', 'prueba')
  })
})
