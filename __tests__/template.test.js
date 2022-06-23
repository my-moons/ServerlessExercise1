/* eslint-disable no-undef */
'use strict'
require('dotenv').config({ path: '../.env' })
const { demoServerless } = require('../src/handler.js')

describe('tests', () => {
  beforeEach(() => { })

  it('unit test', async () => {

    const input = {
        headers: {
          Authorization: 'Basic Test'
        }
    }

    expect(await demoServerless(input)).toEqual({
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': false,
        'Access-Control-Allow-Methods': '*'
      },
      statusCode: 401,
      body: '{"status":401,"message":"unauthorized"}'
    })
  })
})
