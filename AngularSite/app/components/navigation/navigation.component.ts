import { Component } from '@angular/core';
import { PathUtility } from 'djayfresh/utility';

import { BaseComponent } from 'djayfresh/component/shared';
import { AppService, ProjectService } from 'djayfresh/services';
import { ExternalRoutingPath, AppRoutingPath } from 'djayfresh/paths';
import { Project, RouteLink } from 'djayfresh/models';

@Component({
    selector: 'navigation',
    templateUrl: PathUtility.componentTemplateURI('navigation'),
    styleUrls:  [PathUtility.componentStyleURI('navigation')]
})
export class NavigationComponent extends BaseComponent { 
    
    Links = ExternalRoutingPath;

    allProjectsLink: string = '/projects';
    projects: Project[];
     
    constructor(appService: AppService, private projectService: ProjectService){
        super(appService);

        this.projects = this.projectService.getProjects();
    }

    linkClick(url) {
        this.appService.navigate(url);
    }

    httpsLink(link: string) {
        return  `https://${link}`;
    }

    getProjectLink(project: Project): RouteLink {
        return { url: AppRoutingPath.Project, params: { id: project.id }};
    }
}
