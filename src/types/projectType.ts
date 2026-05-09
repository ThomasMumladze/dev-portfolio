type ProjectType = "back-end" | "front-end" | "full-stack" | "mobile" | "api";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface Project {
    id: number;
    applicationName: string;
    type: ProjectType;
    language: string;
    technologies: string[];
    methods: HttpMethod[];
    description: string;
    urls: {
        gitHub?: string;
        azure?: string;
        live?: string;
    };
}
