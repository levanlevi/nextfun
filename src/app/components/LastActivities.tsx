import { Badge, Button, Table, Text } from "@radix-ui/themes";
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import React from "react";
import Link from "next/link";

const LastActivities = () => {

    const activities = [
        { activity: 'Login', points: 10, date: '2024-09-01', txId: '123ABC', link: '#' },
        { activity: 'Purchase', points: 20, date: '2024-09-02', txId: '456DEF', link: '#' },
    ];

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
                            <Badge color="jade" variant="soft" radius="full">
                                +{activity.points}
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            {activity.date}
                            dd.mm.yyyy hh:mm:ss
                        </Table.Cell>
                        <Table.Cell>
                            <div className="flex items-center space-x-2">
                                <Text>
                                    {activity.txId}
                                </Text>
                                <Button
                                    size="1"
                                    variant="soft"
                                    color="gray"
                                    radius="full">
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