import { Badge, Box, Table, Text } from "@radix-ui/themes";
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gql, useSubscription } from "@apollo/client";
import { Activity } from "@/types/Activity";
import { LogsStream, LogsStreamSubscriptionResponse } from "@/types/gql/LogsStreamResponse";
import { formatDate, formatTXID, formatTime } from "@/utils/formatting";
import CopyButton from "./common/CopyButton";
import Image from "next/image";
import { bridged, tx } from "../../../public";

const GET_LOGS = gql`
    subscription ActivityLogsSubscription(
            $batch_size: Int! = 5, 
            $cursor: [logs_stream_cursor_input]!) {
        logs_stream(
            batch_size: $batch_size,
            cursor: $cursor
        ) {
            transaction_hash
            block_timestamp
            address
            decoded(path: "amount0In")
        }
    }
`;

const LastActivities = () => {
    // This is a hack to get the last 50 seconds of logs for smooth demo app
    const nowMinus50Secs = new Date(new Date().getTime() - 475 * 1000);
    const [lastBlockTimeStamp, setLastBlockTimeStamp] = useState(nowMinus50Secs.toISOString());
    const [activities, setActivities] = useState<Activity[]>([]);
    const { data, loading, error } =
        useSubscription<LogsStreamSubscriptionResponse>(GET_LOGS, {
            variables: {
                cursor: {
                    initial_value: {
                        block_timestamp: lastBlockTimeStamp
                    },
                    ordering: 'ASC'
                },
                batch_size: 2
            },
            onSubscriptionData: ({ subscriptionData }) => {
                if (!subscriptionData.data) {
                    return;
                }
                console.log(subscriptionData.data);
                const logs = subscriptionData.data.logs_stream;

                if (logs.length > 0) {
                    setLastBlockTimeStamp(logs[logs.length - 1].block_timestamp);
                }
                const newActivities = logs.map((log: LogsStream) => {
                    return {
                        activity: log.decoded % 4 === 0 ? 'Bridged' : 'Transaction',
                        points: log.decoded,
                        date: log.block_timestamp,
                        txId: log.transaction_hash,
                        link: '#'
                    }
                }) ?? [];
                setActivities(newActivities);
            }
        });

    // todo fix review
    if (error) {
        return <p>Error: {error.message}</p>;
    }

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
                {activities && activities.length > 0 && activities.map((activity) => (
                    <Table.Row key={activity.txId}>
                        <Table.Cell>
                            <Box className="flex flex-row space-x-2">
                                {
                                    activity.activity === 'Transaction' ?
                                        <Image width={16} height={16} src={tx} alt="Transaction"></Image>
                                        : <Image width={16} height={16} src={bridged} alt="Bridged"></Image>
                                }
                                <Text className="text-text-primary font-medium">{activity.activity}</Text>
                            </Box>
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
                            <Box className="flex flex-row text-text-secondary font-medium">
                                <Box className="p-1">
                                    {formatDate(activity.date)}
                                </Box>
                                <Box className="bg-background-elevation-3 rounded-xl p-1">
                                    {formatTime(activity.date)}
                                </Box>
                            </Box>
                        </Table.Cell>
                        <Table.Cell>
                            <div className="flex items-center space-x-2">
                                <Text className="md:w-[calc(11ch+0.5rem)] truncate">
                                    {formatTXID(activity.txId)}
                                </Text>
                                <CopyButton textToCopy={activity.txId} />
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <Link href="/">
                                <ExternalLinkIcon className="text-primary" />
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default LastActivities;