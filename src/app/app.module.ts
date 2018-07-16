import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatRippleModule, MatCardModule, MatProgressSpinnerModule,
  MatButtonModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatTableModule} from '@angular/material';
import 'hammerjs';

// Components
// TODO: Roll related components into seperate module.
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar.component';
import { AppAboutComponent } from './app-about.component';
import { AppHomeComponent } from './app-home.component';
import { AppLoginComponent } from './app-login.component';

// Services
import { AppService } from './app.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AppAboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'login',
    component: AppLoginComponent,
    data: { title: 'Login' }
  },
  { path: '',
    component: AppHomeComponent,
    data: { title: 'Home' }
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatToolbarModule, MatRippleModule,
    MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatTooltipModule,
    RouterModule.forRoot(appRoutes), MatInputModule, FormsModule, MatFormFieldModule, HttpModule, HttpClientModule, MatTableModule
  ],
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppAboutComponent,
    AppHomeComponent,
    AppLoginComponent,
  ],
  providers: [AppService, Title, HttpClient],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
