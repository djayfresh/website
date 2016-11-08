import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';

import { AppService } from 'djayfresh/services';
import { Utility } from 'djayfresh/utility';

@Directive({ 
    selector: '[navigate]'
})
export class NavigationDirective implements AfterViewInit {
    @Input('navigate') url: string;
    @Input('params') set setParams(params: {[key: string]: string}){
        this.params = params || null;
    }

    params: {[key: string]: string};

    constructor(private appService: AppService, private el: ElementRef, ) {
        console.log("Navigator", el);
    }

    ngAfterViewInit() {
        console.log("Set href");
        this.el.nativeElement.href = 'javascript:void(0)';
        //Utility.buildUrl(this.url, this.params);
    }

    @HostListener('click', ['$event.target']) onMouseClick(target) {
        console.log("Mouse Click", this.url, this.params);
        this.appService.navigate(this.url, this.params);
    }
}