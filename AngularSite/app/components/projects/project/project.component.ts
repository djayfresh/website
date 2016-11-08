import { Component, Input, OnInit } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';
import { PathUtility } from 'djayfresh/utility';
import { AppService, ProjectService } from 'djayfresh/services';

import { Project } from 'djayfresh/models';

@Component({
    selector: 'project',
    templateUrl: PathUtility.componentTemplateURI('projects/project'),
    styleUrls: [PathUtility.componentStyleURI('projects/project')]
})
export class ProjectComponent extends BaseComponent implements OnInit{
    @Input() id: string;

    project: Project;

    constructor(appService: AppService, private projectService: ProjectService){
        super(appService);

        this.subsribeToParams((params) => { 
            console.log("Subsribed", params);
            if(params['id']){
                this.id = params['id'];
                this.refresh();
            }
        });
    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        if(this.id){
            this.project = this.projectService.getProjectById(this.id);
        }
    }
}
