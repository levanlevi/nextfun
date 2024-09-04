import { Box } from "@radix-ui/themes";
import Action from "./Action";

const ActionList = () => {
    const actions = [{
        text: "Provide at least $50 liquidity to USDT/ETH",
        isComplete: true
    }, {
        text: "Provide at least $50 liquidity to USDT/ETH",
        isComplete: false
    }, {
        text: "Provide at least $50 liquidity to USDT/ETH",
        isComplete: false
    }]

    return (
        <Box className="flex flex-row space-x-2">
            {actions.map((action, index) => (
                <Box
                    className="flex-1"
                    key={index}>
                    <Box className={`border-b-2 pb-2 ${action.isComplete ? 'border-lime-dark' : 'border-none'}`}>
                        <Action
                            text={action.text}
                            isComplete={action.isComplete}>
                        </Action>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default ActionList;
