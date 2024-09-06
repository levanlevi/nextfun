export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en', dateOptions);
}

export const formatTime = (dateStr: string): string => {
    const date = new Date(dateStr);
    const timeOptions: Intl.DateTimeFormatOptions = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString('en', timeOptions);
}

export const formatTXID = (txId: string) => {
    return `${txId.slice(0, 6)}…${txId.slice(-4)}`;
}