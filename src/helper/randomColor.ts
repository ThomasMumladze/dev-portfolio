// ==========  helper function to generate random color ==========  //
export const randomColor = () => {
    const colors = [
        "#60A5FA", // blue
        "#34D399", // emerald
        "#F472B6", // pink
        "#A78BFA", // violet
        "#FBBF24", // amber
        "#38BDF8", // sky
        "#4ADE80", // green
        "#FB7185", // rose
        "#E879F9", // fuchsia
        "#2DD4BF", // teal
        "#F97316", // orange
        "#818CF8", // indigo
    ];

    return colors[Math.floor(Math.random() * colors.length)];
};
