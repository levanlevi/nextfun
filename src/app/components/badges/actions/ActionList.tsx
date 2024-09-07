import { Box } from "@radix-ui/themes";
import { BadgeAction } from "@/types/badge";
import { FC } from "react";
import Action from "./Action";

type PropType = {
    actions: BadgeAction[];
}

const ActionList: FC<PropType> = ({ actions }) => {

    if (actions.length === 0) {
        return (
            <Box className="flex flex-row space-x-2">
                <Box className="flex-1">
                    <Box className="border-b-4 pb-2 border-none">
                        <Action
                            text="No actions available"
                            isComplete={false}>
                        </Action>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            {actions.map((action, index) => (
                <Box className="flex-1" key={index}>
                    <Box className={`border-b-4 pb-2 
                    ${action.isComplete ? 'border-primary' : 'border-none'}`}>
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
