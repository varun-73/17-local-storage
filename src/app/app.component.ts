import { Component } from '@angular/core';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Local-Storage';
  constructor( private localStorage:LocalService){}
  ngOnInit():void{
    this.localStorage.putData('id','varun')
    console.log(this.localStorage.getData('id'))
  }
}
