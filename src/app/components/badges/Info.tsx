import { Badge, Box, Text } from "@radix-ui/themes";

const Info = () => {
    return (
        <Box className="flex flex-col sm:flex-row justify-between my-2">
            <Box className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
                <Text className="text-text-primary font-semibold">
                    How to Earn:
                </Text>
                <Text className="text-text-secondary">
                    Complete the actions for the badge, no specific order needed.
                </Text>
            </Box>
            <Box className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Box className="bg-background-elevation-3 text-text-secondary rounded-xl px-2">1/3 Completed</Box>
                <Box className="bg-background-elevation-3 bg-primary-disabled text-primary-hover rounded-xl px-2">Total Earnings: 3,000</Box>
            </Box>
        </Box>
    )
}

export default Info;