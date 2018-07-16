import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-about',
    templateUrl: 'app-about.component.html'
})

export class AppAboutComponent implements OnInit {
    constructor(private appService: AppService) {
        this.appService.contentTitle = "Application About";
        this.appService.contentTitleColor = "accent";
    }

    ngOnInit() { }
}