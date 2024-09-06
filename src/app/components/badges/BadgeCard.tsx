import { Box, Card, Text } from "@radix-ui/themes";
import Image from "next/image";
import { discordOg, pudgyOg } from "../../../../public";
import { Badge, BadgesData } from "@/types/badge";

const BadgeCard: React.FC<Badge> = (badge) => {
    return (
        <Box className={`flex flex-col justify-between p-0 rounded-lg h-[178px] w-[176px] bg-background-elevation-3
                    ${badge?.selected ? "border border-states-success" : "border-none"}`}>
            <Box className="text-center bg-background-elevation-2 p-1 rounded-lg">
                <h2>{badge.title}</h2>
            </Box>
            <Box className="flex justify-center items-center w-full h-[112px] bg-background-elevation-3">
                <Image
                    src={`/images/${badge.id}.png`}
                    alt={badge.title}
                    width="64"
                    height="64"
                />
            </Box>
            <Box className="bg-states-success-elevation-2 text-center p-1.5 rounded-b-lg">
                <Text className="text-states-success font-medium">{badge.multiplier}x</Text>
            </Box>
        </Box>
    );
};

export default BadgeCard;