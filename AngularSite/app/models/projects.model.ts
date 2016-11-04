
export interface Project {
    id: string;
    name: string;
    shortCode: string;
    shortDescription: string;
    details: ProjectDetails[];

    descriptions: string[];
}

export interface ProjectDetails {
    links: ProjectLink[];
}

export class ProjectLink {
    uri: string;
    name: string;
}

export class ImageLink extends ProjectLink {
    alternateText: string;
}

export class VideoLink extends ProjectLink {
    allowFullscreen: boolean;
    hideControls: boolean;
}