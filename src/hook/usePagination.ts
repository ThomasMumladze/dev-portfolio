import { useCallback, useState } from "react";

const usePagination = <T>(data: T[], defaultPerPage = 18) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(defaultPerPage);

    const totalPages = Math.ceil(data.length / itemPerPage);
    const startIndex = (currentPage - 1) * itemPerPage;
    const currentData = data.slice(startIndex, startIndex + itemPerPage);

    const getPageNumbers = useCallback((): (number | "...")[] => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages: (number | "...")[] = [];

        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) pages.push(i);
            pages.push("...");
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
            pages.push(1);
            pages.push("...");
            for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            pages.push("...");
            for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
            pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    }, [currentPage, totalPages]);

    // range validation
    const goToPage = useCallback(
        (page: number) => {
            if (page < 1 || page > totalPages) return;
            setCurrentPage(page);
        },
        [totalPages],
    );

    const changePerPage = useCallback((newPerPage: number) => {
        setItemPerPage(newPerPage);
        setCurrentPage(1); // ← გვერდი 1-ზე ბრუნდება
    }, []);

    return {
        currentData,
        currentPage,
        totalPages,
        itemPerPage,
        getPageNumbers,
        goToPage,
        changePerPage,
    };
};

export default usePagination;
