import {makeAutoObservable} from 'mobx'

class pwsGen{
    constructor(){
        makeAutoObservable(this)
    }
    capLet = false
    specLet = false
    password = ''
    pswlen = 8

    setPass(pswlen){
        let length = pswlen,
            charset = "abcdefghijklmnopqrstuvwxyz0123456789",
            capitalLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            specialLet = "!@#$%^&*()_-+=~/?<>",
            retVal = "";
        if(this.capLet){
            charset+=capitalLet
        }
        if(this.specLet){
            charset+=specialLet
        }
        console.log(charset)
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        this.password = retVal;
    }
    setCapLet(){
        this.capLet = true
    }
    unsetCapLet(){
        this.capLet = false
    }
    setSpecLet(){
        this.specLet = true
    }
    unsetSpecLet(){
        this.specLet = false
    }
}

export default pwsGen