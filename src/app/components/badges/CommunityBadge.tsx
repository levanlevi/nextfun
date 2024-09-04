import { Box, Card, Text } from "@radix-ui/themes";
import Image from "next/image";
import { discordOg, pudgyOg } from "./../../../../public";

interface CommunityBadgeProps {
    name: string;
    // todo: fix this
    // image: StaticImageData;
    image: string;
    multiplier: string;
    selected?: boolean;
}

const CommunityBadge: React.FC<CommunityBadgeProps> = ({ name, image, multiplier, selected }) => {
    return (
        <Card className={`flex flex-col justify-between p-0 rounded-lg h-[178px] w-[176px]
                    ${selected ? "border lime-border" : "border-none"}`}>

            <Box className="text-center bg-default p-1">
                <h2>{name}</h2>
            </Box>
            <Box className="flex justify-center items-center w-full h-[112px]">
                <Image src={pudgyOg} className="object-contain" layout="fixed" width="64" height="64" alt="pudgy OG" />
            </Box>
            <Box className="bg-lime-fade text-center p-1">
                <Text className="lime">{multiplier}x</Text>
            </Box>
        </Card >
    );
};

export default CommunityBadge;
