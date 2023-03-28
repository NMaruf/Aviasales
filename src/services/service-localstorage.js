export default class ServiceLocalstorage {
  getId = (key) => localStorage.getItem(key)

  setValue = (key, value) => localStorage.setItem(key, value)

  clear = () => localStorage.clear()
}
