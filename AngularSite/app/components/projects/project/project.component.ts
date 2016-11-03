import { Component, Input } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';
import { PathUtility } from 'djayfresh/utility';
import { AppService } from 'djayfresh/services';

@Component({
    selector: 'project',
    templateUrl: PathUtility.componentTemplateURI('projects/project'),
    styleUrls: [PathUtility.componentStyleURI('projects/project')]
})
export class ProjectComponent extends BaseComponent {
    @Input() id: number;

    constructor(appService: AppService){
        super(appService);
    }
}
