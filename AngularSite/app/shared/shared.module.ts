import { NgModule } from '@angular/core';

import { BaseComonent } from './base-component.component';

@NgModule({
    imports: [BaseComonent],
    declarations: [BaseComonent],
    exports: [BaseComonent]
})
export class SharedModule { }
 