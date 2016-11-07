import { Injectable } from '@angular/core';

import { RouterService } from './router.service';

@Injectable()
export class AppService {

    constructor(private routerService: RouterService) {
    }


    subsribeToParams(componentId: number, callback: Function){
        this.routerService.subsribeToParams(componentId, callback);
    }

    unsubsribeToParams(componentId: number){
        this.routerService.unsubsribeToParams(componentId);
    }

    navigate(url: string, params: {[key: string]: string} = null) {
        this.routerService.navigate(url, params);
    }
} 