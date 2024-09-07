import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Badge, BadgesData } from "@/types/badge";

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
                    ${props.badge?.selected ? "border border-states-success" : "border-none"}`}>
            <Box className="text-center bg-background-elevation-2 p-1 rounded-lg">
                <h2>{props.badge.title}</h2>
            </Box>
            <Box className="flex justify-center items-center w-full h-[112px] bg-background-elevation-3">
                <Image
                    src={`/images/${props.badge.id}.png`}
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