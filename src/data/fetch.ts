import axios, { AxiosResponse } from 'axios'

export function fetch<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return new Promise((resolve, reject) =>
    axios.get<T>(endpoint, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => resolve(response))
      .catch(error => {
        console.error(error)
        return reject(error)
      })
  )
}
