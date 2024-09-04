import { Badge, Box, Text } from "@radix-ui/themes";

const Info = () => {
    return (
        <Box className="flex flex-row justify-between my-2">
            <Box className="flex flex-row items-center space-x-1">
                <Text className="primary-text">
                    How to Earn:
                </Text>
                <Text className="secondary-text">
                    Complete the actions for the badge, no specific order needed.
                </Text>
            </Box>
            <Box className="flex flex-row space-x-2">
                <Badge color="jade" variant="soft" radius="full">1/3 Completed</Badge>
                <Badge color="gray" variant="soft" radius="full">Total Earnings: 3,000</Badge>
            </Box>
        </Box>
    )
}

export default Info;