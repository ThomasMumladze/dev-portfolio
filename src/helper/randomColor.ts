// ==========  helper function to generate random color ==========  //
export const randomColor = () => {
    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#F333FF",
        "#33FFF5",
        "#FF33A8",
        "#A833FF",
        "#33FF8A",
        "#FF8A33",
        "#8AFF33",
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#96CEB4",
        "#FFEAA7",
        "#DDA0DD",
        "#98D8C8",
        "#F7DC6F",
        "#BB8FCE",
        "#85C1E9",
        "#F0B27A",
        "#82E0AA",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
};
