import ServiceLocalstorage from './service-localstorage'

export default class AviasalesService {
  localstorageService = new ServiceLocalstorage()

  _apiBase = 'https://aviasales-test-api.kata.academy/'

  async getSearchId() {
    const res = await fetch(`${this._apiBase}search`)

    if (!res.ok) {
      throw new Error(`Could not fetch SearchId, receiced ${res.status}`)
    }
    const jsonRes = await res.json()
    const key = this.localstorageService.getId('searchId')
    if (!key) {
      this.localstorageService.setValue('searchId', jsonRes.searchId)
    }
    return jsonRes.searchId
  }

  async getAllTickets() {
    let key = this.localstorageService.getId('searchId')
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
