import { Injectable } from '@angular/core';
import { Router as AngularRouter, ActivatedRoute, RouterState } from '@angular/router';

import { NavigationStart } from '@angular/router';

@Injectable()
export class RouterService {
    
    subscribersToParams: Subscriber[] = [];

    constructor(private router: AngularRouter){
        this.init();
    }

    private init() {
        this.router.events.subscribe((e) => {
            console.log("event", e);
            if(e instanceof NavigationStart) {
                //this.router.getTree();
            }

            console.log("State", this.router.routerState);
            
            this.router.routerState.root.params.subscribe((params) => {
                console.log("Params", params);
                if(this.subscribersToParams) {
                    this.subscribersToParams.forEach((subsriber) => {
                        if(subsriber && subsriber.callback){
                            subsriber.callback(params);
                        }
                    });
                }
            });
        });
    }

    subsribeToParams(componentId: number, callback: Function){
        this.subscribersToParams.push({id: componentId, callback: callback});
    }

    unsubsribeToParams(componentId: number){
        var index = -1;
        for(var listIndex = 0; listIndex < this.subscribersToParams.length; listIndex++){
            if(this.subscribersToParams[listIndex].id === componentId){
                index = listIndex;
                break;
            }
        }
        if(index >= 0){
            this.subscribersToParams = this.subscribersToParams.splice(index, 1);
        }
    }
}

export interface Subscriber {
    id: number;
    callback: Function;
}