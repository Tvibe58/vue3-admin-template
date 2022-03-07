const storage = {
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    const temp = localStorage.getItem(key)
    if (!temp) {
      return null
    } else {
      return JSON.parse(temp)
    }
  },
  remove (key) {
    localStorage.removeItem(key)
  }
}

export default storage
