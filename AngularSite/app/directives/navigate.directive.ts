import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';

import { AppService } from 'djayfresh/services';
import { Utility } from 'djayfresh/utility';
import { RouteLink, RouteParams } from 'djayfresh/models';

@Directive({ 
    selector: '[navigate]'
})
export class NavigationDirective implements AfterViewInit {
    @Input('navigate') link: string | RouteLink;
    @Input('params') set setParams(params: RouteParams){
        this.params = params || null;
    }

    params: RouteParams;

    constructor(private appService: AppService, private el: ElementRef, ) {
    }

    ngAfterViewInit() {
        console.log("Set href");
        this.el.nativeElement.href = 'javascript:void(0)';
        //Utility.buildUrl(this.url, this.params);
    }

    @HostListener('click', ['$event.target']) onMouseClick(target) {
        var url = '';
        console.log("Mouse Click", this.link, this.params);

        if(this.link instanceof RouteLink){
            this.params = this.link.params;
            url = this.link.url;
        }else {
            url = <string>this.link
        }

        this.appService.navigate(url, this.params);
    }
}