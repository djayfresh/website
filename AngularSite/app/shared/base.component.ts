import { Component } from '@angular/core';

@Component({
    template: '',
})
export class BaseComponent { 
    static nextComponentId: number = 0;
    componentId: number;

    constructor(){
        this.componentId = BaseComponent.nextComponentId++;
    }
}
