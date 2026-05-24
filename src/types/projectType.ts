type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ProjectType {
    projectId: number;
    applicationName: string;
    applicationType: string;
    programmingLanguage: string;
    technologies: string[];
    methods: HttpMethod[];
    status: string;
    description: string;
    urls: {
        gitHub?: string;
        azure?: string;
        live?: string;
    };
    isPublic: boolean;
    isActive: boolean;
}
