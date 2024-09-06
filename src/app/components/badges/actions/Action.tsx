import { Badge, Box, Card } from "@radix-ui/themes";

interface ActionProps {
    text: string;
    isComplete: boolean;
}

const Action: React.FC<ActionProps> = ({ text, isComplete }) => {
    return (
        <Box className="p-0 pb-1 rounded-lg max-w-full">
            <Box className="flex flex-row justify-between rounded-t-lg pl-5 py-3 bg-background-elevation-3">
                <h2 className="text-text-secondary font-medium">Action</h2>
                {isComplete && <Box className="bg-states-success-elevation-1 text-states-success font-medium rounded-3xl px-2 mr-2">Completed</Box>}
            </Box>
            <Box className="p-5 bg-background-elevation-2 rounded-b-lg text-text-secondary">
                {text}
            </Box>
        </Box>
    );
};

export default Action;
