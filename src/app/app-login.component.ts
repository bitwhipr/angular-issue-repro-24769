import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'app-login.component.html'
})

export class AppLoginComponent implements OnInit {
    titleColor:string;

    constructor(private appService: AppService) {
        this.appService.contentTitle = "Application Login";
        this.appService.contentTitleColor = "warn";
    }

    ngOnInit() { }

    onSubmit(){
         this.appService.simulateLoad();

         console.log("Logging in...");
    }
}