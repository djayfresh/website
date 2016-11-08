import { BaseModel } from 'djayfresh/base';

export class Utility {
    
    static buildUrl(url: string, params: {[key: string]: string}): string {
        for(var paramKey in params) {
            var paramId = `:${paramKey}`;
            var urlParamIndex = url.indexOf(paramId);
            if(urlParamIndex >= 0){
                url = url.replace(new RegExp(paramId, 'g'), params[paramKey]);
            }
        };
        return url;
    }

    static isString(obj: any) {
        return typeof(obj) == 'string';
    }

    static isArray(obj: any) {
        return typeof(obj) == 'array';
    }
} 