type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ProjectType {
    id: number;
    applicationName: string;
    type: string;
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
