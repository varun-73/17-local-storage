import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  key="varun";
  public putData(key:string, value:string){
    localStorage.setItem(key,this.encrypt(value));
  }

  public getData(key:string){
    return this.decrypt(localStorage.getItem(key)||"");
  }

  public removeData(key:string){
    localStorage.removeItem(key);
  }


  public clearData(){
    localStorage.clear();
  }

  private encrypt(text:string){
    return CryptoJS.AES.encrypt(text, this.key).toString();
  }

  private decrypt(textToDecrypt:string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.key).toString(CryptoJS.enc.Utf8)
  }

}
