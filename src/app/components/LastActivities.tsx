import { Badge, Button, Table, Text } from "@radix-ui/themes";
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import React from "react";
import Link from "next/link";
import { gql, useSubscription } from "@apollo/client";
import { Activity } from "@/types/Activity";
import { LogsStream, LogsStreamSubscriptionResponse } from "@/types/gql/LogsStreamResponse";
import { formatDate, formatTXID } from "@/utils/formatting";
import { copyToClipboard } from "@/utils/copy";

const GET_LOGS = gql`
    subscription ActivityLogsSubscription {
        logs_stream(batch_size: 10, cursor: {initial_value: {block_number: "0"}}) {
            transaction_hash
            block_timestamp
            address
            decoded(path: "amount0In")
            block_number
        }
    }
`;

const handleCopy = (txId: string) => {
    copyToClipboard(txId,
        // todo replace with toast
        () => console.log('Copied'),
        () => console.log('Error copying'));
}

const LastActivities = () => {
    const { data, loading, error } =
        useSubscription<LogsStreamSubscriptionResponse>(GET_LOGS);

    // todo fix review
    if (loading) return <p>Loading...</p>;
    // todo fix review
    if (error) return <p>Error: {error.message}</p>;

    const activities: Activity[] = data?.logs_stream.map((log: LogsStream) => {
        return {
            activity: 'Swap',
            points: log.decoded,
            date: log.block_timestamp,
            txId: log.transaction_hash,
            link: '#'
        }
    }) ?? [];

    return (
        <Table.Root
            size="2"
            variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Activities</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Points</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>TXID</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {activities.map((activity) => (
                    <Table.Row key={activity.txId}>
                        <Table.Cell>
                            {activity.activity}
                        </Table.Cell>
                        <Table.Cell>
                            {/* text width calculation so that table doesn’t fluctuate horizontally  */}
                            <Text className="md:w-[calc(12ch+1rem)] truncate">
                                <Badge color="jade" variant="soft" radius="full">
                                    {activity.points > 0 ? '+' : ''}{activity.points}
                                </Badge>
                            </Text>
                        </Table.Cell>
                        <Table.Cell>
                            <Text className="md:w-[calc(22ch+1.5rem)] truncate">
                                {formatDate(activity.date)}
                            </Text>
                        </Table.Cell>
                        <Table.Cell>
                            <div className="flex items-center space-x-2">
                                <Text className="md:w-[calc(12ch+1.5rem)] truncate">
                                    {formatTXID(activity.txId)}
                                </Text>
                                <Button
                                    size="1"
                                    variant="soft"
                                    color="gray"
                                    radius="full"
                                    onClick={() => handleCopy(activity.txId)}
                                >
                                    Copy
                                </Button>
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <Link href="/">
                                <ExternalLinkIcon className="text-gray-500" />
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default LastActivities;