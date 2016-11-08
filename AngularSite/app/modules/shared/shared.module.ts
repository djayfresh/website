import { NgModule } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';

import { NavigationDirective } from 'djayfresh/directives';

var directives = [NavigationDirective];

@NgModule({
    imports: [],
    declarations: [BaseComponent, ...directives],
    exports: [BaseComponent, ...directives]
})
export class SharedModule { }
 