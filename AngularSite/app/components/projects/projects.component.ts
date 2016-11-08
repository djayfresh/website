import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';
import { PathUtility } from 'djayfresh/utility';
import { AppService, ProjectService } from 'djayfresh/services';

import { Project } from 'djayfresh/models';
import { Utility } from 'djayfresh/utility';
import { AppRoutingPath } from 'djayfresh/paths';

@Component({
    selector: 'projects',
    templateUrl: PathUtility.componentTemplateURI('projects'),
    styleUrls: [PathUtility.componentStyleURI('projects')]
})
export class ProjectsComponent extends BaseComponent implements OnInit { 
    
    projects: Project[];

    constructor(appService: AppService, private projectService: ProjectService){
        super(appService);
    }

    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }

    getProjectLink(project: Project){
        return Utility.buildUrl(AppRoutingPath.Project, {id: project.id});
    }
}
