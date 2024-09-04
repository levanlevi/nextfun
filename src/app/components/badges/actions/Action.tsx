import { Badge, Box, Card } from "@radix-ui/themes";

interface ActionProps {
    text: string;
    isComplete: boolean;
}

const Action: React.FC<ActionProps> = ({ text, isComplete }) => {
    return (
        <Card className="p-0 pb-5 rounded-lg max-w-full" variant="classic">
            <Box className="flex flex-row justify-between pl-5 py-3 bg-card-header">
                <h2>Action</h2>
                {isComplete && <Badge color="jade" variant="soft" radius="full" className="mr-2">Complete</Badge>}
            </Box>
            <Box className="p-5 bg-card-body rounded-b-lg">
                {text}
            </Box>
        </Card>
    );
};

export default Action;
