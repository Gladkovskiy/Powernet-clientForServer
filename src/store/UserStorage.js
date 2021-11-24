import {makeAutoObservable} from 'mobx'

class UserStore {
  isAuth = true
  role = 'USER'

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this.isAuth = bool
  }
  setRole(role) {
    this.role = role
  }

  get isAdmin() {
    return this.role === 'ADMIN'
  }

  get isUser() {
    return this.role === 'USER'
  }
}

export default new UserStore()
