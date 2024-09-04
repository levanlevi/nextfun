import { Box, Card } from "@radix-ui/themes";

interface ActionProps {
    text: string;
    isComplete: boolean;
}

const Action: React.FC<ActionProps> = ({ text, isComplete }) => {
    return (
        <Card className="p-0 pb-5 rounded-lg max-w-full" variant="classic">
            <Box className="pl-5 py-3 bg-card-header">
                <h2>Action</h2>
            </Box>
            <Box className="p-5 bg-card-body rounded-b-lg">
                {text}
            </Box>
        </Card>
    );
};

export default Action;
