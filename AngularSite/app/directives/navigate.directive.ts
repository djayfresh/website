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
        this.el.nativeElement.href = 'javascript:void(0)';
        //Utility.buildUrl(this.url, this.params);
    }

    @HostListener('click', ['$event.target']) onMouseClick(target) {
        var url = '';        
        if(Utility.isString(this.link)){
            url = <string>this.link
        }
        else {
            var routeLink = <RouteLink>this.link;
            this.params = routeLink.params;
            url = Utility.buildUrl(routeLink.url, this.params);
        }

        this.appService.navigate(url, this.params);
    }
}