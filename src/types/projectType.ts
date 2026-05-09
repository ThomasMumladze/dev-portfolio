type ProjectType = "back-end" | "front-end" | "full-stack" | "mobile" | "api";
type Language = "Java" | "TypeScript" | "Python" | "C#" | "Kotlin";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface Project {
    id: number;
    applicationName: string;
    type: ProjectType;
    language: Language;
    technologies: string[];
    methods: HttpMethod[];
    description: string;
    urls: {
        gitHub?: string;
        live?: string;
    };
}
