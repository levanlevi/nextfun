import { Box, Card, Skeleton, Text } from "@radix-ui/themes";
import Image from "next/image";
import { discordOg, pudgyOg } from "../../../../public";

export const BadgeCardSkeleton = () => {
    return (
        <>
            <Box className="flex flex-col justify-between p-0 rounded-lg h-[98px] w-[96px] bg-background-elevation-3">
                <Box className="flex justify-center items-center w-full h-[112px]">
                    <Image src={pudgyOg} className="object-contain" width="64" height="64" alt="pudgy OG" />
                </Box>
            </Box>
            <Box className="flex flex-col mt-1 justify-between p-0 rounded-lg bg-default w-[96px]">
                <Box className="flex flex-row space-x-2 px-1">
                    <Skeleton className="flex-1 text-disabled"></Skeleton>
                    <Skeleton className="flex-1 text-disabled"></Skeleton>
                    <Skeleton className="flex-1 text-disabled"></Skeleton>
                </Box>
                <Box className="text-center p-1">
                    <Text className="lime"><Skeleton></Skeleton></Text>
                </Box>
            </Box>
        </>
    );
};