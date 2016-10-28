import { Component } from '@angular/core';

@Component({
})
export class BaseComponent { 
    static nextComponentId: number = 0;
    id: number;

    constructor(){
        this.id = nextComponentId++;
    }
}
