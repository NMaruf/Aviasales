export default class AviasalesService {
  _apiBase = 'https://aviasales-test-api.kata.academy/'

  async getSearchId() {
    const res = await fetch(`${this._apiBase}search`)

    if (!res.ok) {
      throw new Error(`Could not fetch SearchId, receiced ${res.status}`)
    }
    const jsonRes = await res.json()
    const key = localStorage.getItem('searchId')
    if (!key) {
      localStorage.setItem('searchId', jsonRes.searchId)
    }
    return jsonRes.searchId
  }

  async getAllTickets() {
    let key = localStorage.getItem('searchId')
    if (key === null) {
      key = await this.getSearchId()
    }

    const res = await fetch(`${this._apiBase}tickets?searchId=${key}`)

    if (!res.ok) {
      if (res.status === 500) {
        throw new Error(`${res.status}`)
      }
      throw new Error(`Could not fetch tickets, receiced ${res.status}`)
    }

    return res.json()
  }
}
