import {makeAutoObservable} from 'mobx'

class password{
    constructor(){
        makeAutoObservable(this)
    }
    name = ''
    password = ''

    setName(value) {
        this.name = value
    }
    setPassword(value) {
        this.password = value
    }
    resetName(){
        this.name = ''
    }
    resetPassword() {
        this.password = ''
    }

}

export default password