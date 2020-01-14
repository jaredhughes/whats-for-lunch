import axios, { AxiosStatic } from 'axios'
import { fetch } from './fetch'

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function
  mockRejectedValue: Function
}

jest.mock('axios')

const mockAxios = axios as AxiosMock

describe('fetch', () => {
  it('calls provided endpoint', () => {
    fetch('/my-endpoint')

    expect(mockAxios.get).toHaveBeenCalledWith('/my-endpoint', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
  })

  it('returns a promise', () => {
    const request = fetch('/my-endpoint')

    expect(request).toBeInstanceOf(Promise)
  })
})
