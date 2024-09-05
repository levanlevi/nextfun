export type LogsStream = {
    transaction_hash: string;
    block_timestamp: string;
    address: string;
    decoded: number;
    block_number: string;
};

export type LogsStreamSubscriptionResponse = {
    logs_stream: LogsStream[];
};