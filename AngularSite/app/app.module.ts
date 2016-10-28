import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

var baseProvider = {provide: APP_BASE_HREF, useValue: ''};

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule, AppRouting, FormsModule],
    declarations: [AppComponent, HomeComponent],
    providers: [baseProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
