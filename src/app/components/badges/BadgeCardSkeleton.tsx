import { Box, Skeleton, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Badge } from "@/types/badge";
import { map as cointImageMap } from "@/utils/image";

export const BadgeCardSkeleton = (badge: Badge) => {
    return (
        <>
            <Box className="flex flex-col justify-between p-0 rounded-lg h-[98px] w-[96px] bg-background-elevation-3 cursor-pointer">
                <Box className="flex justify-center items-center w-full h-[112px]">
                    <Image
                        src={`/images/${cointImageMap.get(badge.id)}.png`}
                        className="rounded-full imginactive"
                        alt={badge.title}
                        width={64}
                        height={64}
                    />
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