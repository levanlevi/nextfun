import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Badge } from "@/types/badge";
import { map as cointImageMap } from "@/utils/image";

type PropType = {
    badge: Badge,
    onClick?: (id: string) => void
}

const BadgeCard: React.FC<PropType> = (props) => {

    const handleBadgeClick = () => {
        if (props.onClick) {
            props.onClick(props.badge.id);
        }
    }

    return (
        <Box onClick={handleBadgeClick} className={`flex flex-col justify-between p-0 rounded-lg h-[178px] w-[176px] bg-background-elevation-3
                    ${props.badge?.selected ? "border border-states-success" : "border-none"} cursor-pointer`}>
            <Box className="flex flex-row justify-between space-x-1 text-center bg-background-elevation-2 p-2 rounded-t-lg">
                <Text className="font-medium text-xs text-text-primary grow truncate">{props.badge.title}</Text>
                <Text className="font-medium text-xs text-text-secondary grow truncate">{props.badge.actions?.length} Actions</Text>
            </Box>
            <Box className="flex justify-center items-center w-full h-[112px] bg-background-elevation-3">
                <Image
                    src={`/images/${cointImageMap.get(props.badge.id)}.png`}
                    className={`rounded-full ${props.badge?.selected ? 'border-4 border-states-success' : 'imginactive'}`}
                    alt={props.badge.title}
                    width={64}
                    height={64}
                />
            </Box>
            <Box className="bg-states-success-elevation-2 text-center p-1.5 rounded-b-lg">
                <Text className="text-states-success font-medium">{props.badge.multiplier}x</Text>
            </Box>
        </Box>
    );
};

export default BadgeCard;