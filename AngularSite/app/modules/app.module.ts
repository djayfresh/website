import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { SharedModule } from 'djayfresh/modules/shared';
import { AppRouting } from 'djayfresh/routes';

import { AppComponent, HomeComponent, NavigationComponent } from 'djayfresh/component/home';

var baseProvider = {provide: APP_BASE_HREF, useValue: ''};

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule, AppRouting, FormsModule],
    declarations: [AppComponent, HomeComponent, NavigationComponent],
    providers: [baseProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
