import { useEffect, useState } from "react";
import type { ProjectType } from "../types/projectType";

export const useApiFetcher = (GetData: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingStart, setLoadingStart] = useState(0);
    const [projectData, setProjectData] = useState<ProjectType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const start = performance.now();

            const res = await GetData();

            const end = performance.now();

            const duration = Math.max(end - start, 600);

            setProjectData(res);
            setLoadingStart(duration);

            await new Promise((r) => setTimeout(r, 250));

            setLoading(false);
        };

        fetchData();
    }, []);

    return { loading, loadingStart, projectData };
};
