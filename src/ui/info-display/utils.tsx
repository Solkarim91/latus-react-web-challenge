export const formatTimeRange = (timeFrom: string, timeTo: string) => {
    const fromDate = new Date(timeFrom);
    const toDate = new Date(timeTo);

    const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

    return `${formatTime(fromDate)} - ${formatTime(toDate)}`;
};
