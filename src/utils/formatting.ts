export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export const formatTXID = (txId: string) => {
    return `${txId.slice(0, 6)}…${txId.slice(-4)}`;
}