import { Box, Card, Text } from "@radix-ui/themes";
import Image from "next/image";
import { discordOg, pudgyOg } from "../../../../public";

interface BadgeCardProps {
    name: string;
    // todo: fix this
    // image: StaticImageData;
    image: string;
    multiplier: string;
    selected?: boolean;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ name, image, multiplier, selected }) => {
    return (
        <Box className={`flex flex-col justify-between p-0 rounded-lg h-[178px] w-[176px] bg-background-elevation-3
                    ${selected ? "border border-states-success" : "border-none"}`}>
            <Box className="text-center bg-background-elevation-2 p-1 rounded-lg">
                <h2>{name}</h2>
            </Box>
            <Box className="flex justify-center items-center w-full h-[112px] bg-background-elevation-3">
                <Image src={pudgyOg} className="object-contain" layout="fixed" width="64" height="64" alt="pudgy OG" />
            </Box>
            <Box className="bg-states-success-elevation-2 text-center p-1.5 rounded-b-lg">
                <Text className="text-states-success font-medium">{multiplier}x</Text>
            </Box>
        </Box>
    );
};

export default BadgeCard;