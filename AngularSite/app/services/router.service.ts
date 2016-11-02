import { Injectable } from '@angular/core';
import { Router as AngularRouter, ActivatedRoute, RouterState } from '@angular/router';

@Injectable()
export class RouterService {
    
    subscribersToParams: Subscriber[] = [];

    constructor(private router: AngularRouter){
        this.init();
    }

    private init() {
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

    }
}

export interface Subscriber {
    id: number;
    callback: Function;
}