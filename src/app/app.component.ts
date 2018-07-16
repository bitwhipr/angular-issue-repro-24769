import { Component } from '@angular/core';

import '../../node_modules/material-design-icons/iconfont/material-icons.css';
import '../assets/css/style.scss';
import 'hammerjs';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private appService: AppService){
    }
 }

 
