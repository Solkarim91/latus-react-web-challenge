export const formatTimeRange = (timeFrom: string, timeTo: string) => {
    const fromDate = new Date(timeFrom);
    const toDate = new Date(timeTo);

    const formatTime = (date: Date) =>
        date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC",
    });


    return `${formatTime(fromDate)} - ${formatTime(toDate)}`;
};
