//@import {} from '';


export class PathUtility {
    static buildPath = './app/components/';
    
    static componentURI(resourceLocationURI: string): string{
        var html = PathUtility.buildPath + resourceLocationURI;
        return html;
    }

    static componentTemplateURI(resourceLocationURI: string): string{
        var html = PathUtility.pathURI(resourceLocationURI) + '.component.html';
        return html;
    }

    static componentStyleURI(resourceLocationURI: string, isLess = true): string{
        var css = PathUtility.pathURI(resourceLocationURI) + '.component.' + (isLess? 'le' : 'c') + 'ss';
        return css;
    }

    private static pathURI(location: string) {
        var locationBase = PathUtility.lastPath(location);
        location = location == 'app'? null : location;
        var path = location? (location + '/') : '';
        var result = PathUtility.buildPath + path + locationBase;
        return result;
    }
    
    static lastPath(path: string) {
        var split = path.split('/');
        return split[split.length - 1];
    }
}
