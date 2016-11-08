import { Component } from '@angular/core';
import { PathUtility } from 'djayfresh/utility';

import { BaseComponent } from 'djayfresh/component/shared';
import { AppService } from 'djayfresh/services';
import { ExternalRoutingPath } from 'djayfresh/paths';

@Component({
    selector: 'navigation',
    templateUrl: PathUtility.componentTemplateURI('navigation'),
    styleUrls:  [PathUtility.componentStyleURI('navigation')]
})
export class NavigationComponent extends BaseComponent { 
    
    Links = ExternalRoutingPath;

    allProjectsLink: string = '/projects';
     
    constructor(appService: AppService){
        super(appService);
    }

    linkClick(url) {
        this.appService.navigate(url);
    }

    httpsLink(link: string) {
        return  `https://${link}`;
    }
}
