import { Component } from '@angular/core';

import { AppService } from 'djayfresh/services';

@Component({
    template: '',
})
export class BaseComponent { 
    static nextComponentId: number = 0;
    componentId: number;

    constructor(protected appService: AppService){
        this.componentId = BaseComponent.nextComponentId++;
    }


    subsribeToParams(callback: Function){
        this.appService.subsribeToParams(this.componentId, callback);
    }

    unsubsribeToParams() {
        this.appService.unsubsribeToParams(this.componentId);
    }
}
