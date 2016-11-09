import { Injectable } from '@angular/core';

import { Project, ProjectLink, ProjectDetails, ImageLink, VideoLink } from 'djayfresh/models';

@Injectable()
export class ProjectService {
    private projects: Project[];

    constructor() {
        this.projects = [];

        this.buildProjectList();
    }

    getProjects(): Project[] {
        return this.projects;
    }

    getProjectById(id: string){
        var projectSearch = this.projects.filter((project) => project.id == id);
        if(projectSearch.length <= 0){
            return null;
        }
        return projectSearch[0];
    }

    getProjectByCode(shortCode: string){
        var projectSearch = this.projects.filter((project) => project.shortCode == shortCode);
        if(projectSearch.length <= 0){
            return null;
        }
        return projectSearch[0];
    }

    //Keep project list client side
    //No API controllers at this time
    private buildProjectList() {
        this.addGameEngine();
        this.addEscherPlex();
        this.addTowerOffense();
        this.addLycan();
        this.addTC5();
        this.addAngularWebsite();
        this.addFreshCookies();
    }

    private addEscherPlex() {
        var escherPlex: Project = {
            id: 'escherplex',
            name: 'Escher Plex',
            shortCode: 'epx',
            shortDescription: 'Take a journey through the world of M.C. Escher in this puzzle style mind game',
            details: []
        };

        this.projects.push(escherPlex);
    }

    private addGameEngine() {
        var gameEngine: Project = { 
            id: 'gameEngine',
            name: 'Game Engine',
            shortCode: 'tfe',
            shortDescription: 'The Fresh Game Engine, my own OpenGL rendering engine',
            details: []
        }

        this.projects.push(gameEngine);
    }

    private addTC5() {
        var tc5: Project = { 
            id: 'tc5',
            name: 'T.C.5',
            shortCode: 'tc5',
            shortDescription: 'This intractive arcade classic now in the home using Microsoft Kinect',
            details: []
        }

        this.projects.push(tc5);
    }

    private addTowerOffense() {
        var towerOffense: Project = { 
            id: 'towerOffense',
            name: 'Zombie Tower Offense',
            shortCode: 'zto',
            shortDescription: 'A spin on the classic Tower Defense gametype',
            details: []
        }

        this.projects.push(towerOffense);
    }
    
    private addLycan() {
        var lycan: Project = { 
            id: 'lycan',
            name: 'Lycan',
            shortCode: 'lyn',
            shortDescription: 'Wearwolf or Villager, this multiplayer game will have all your friends jumping in their seats',
            details: []
        }

        this.projects.push(lycan);
    }
    
    private addCityDefense() {
        var cityDefense: Project = { 
            id: 'cityDefense',
            name: 'City Defense',
            shortCode: 'cdf',
            shortDescription: 'Defend the city from destruction in this 3rd person flying game.',
            details: []
        }

        this.projects.push(cityDefense);
    }
    
    private addFreshCookies() {
        var freshCookies: Project = { 
            id: 'freshCookies',
            name: 'Fresh Cookies',
            shortCode: 'fcm',
            shortDescription: 'Why not have more cookies while playing your favorite game, Minecraft',
            details: []
        }

        this.projects.push(freshCookies);
    }

    
    private addAngularWebsite() {
        var towerOffense: Project = { 
            id: 'angularWebsite',
            name: 'Angular 2 Website',
            shortCode: 'a2w',
            shortDescription: 'This website upgraded to Angular 2',
            details: []
        }

        this.projects.push(towerOffense);
    }

    private addImageLink(src: string, name: string, altText: string = null): ImageLink {
        return { uri: src, name: name, alternateText: altText };
    }

    private addVideoLink(src: string, name: string, options: { allowFullscreen: boolean, hideControls: boolean} = null): VideoLink {
        var videoLink = { uri: src, name: name, allowFullscreen: true, hideControls: false };
        if(options) {
            videoLink.allowFullscreen = options.allowFullscreen;
            videoLink.hideControls = options.hideControls;
        }
        return videoLink;
    }
} 