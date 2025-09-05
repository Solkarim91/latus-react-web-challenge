export const capitalizeString = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getIntensityIconColour = (index: string) => {
    if (index === "very low") {
        return "#01BFFF";
    } else if (index === "low") {
        return "#3BB371";
    } else if (index === "moderate") {
        return "#5F9DA0";
    } else if (index === "high") {
        return "#FF6247";
    } else if (index === "very high") {
        return "#8B0000";
    };
};
