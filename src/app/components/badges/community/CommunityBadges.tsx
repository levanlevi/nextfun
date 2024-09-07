import { Box, Card, ScrollArea } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import badgesJson from './../../../../../public/data/badges.json';
import { BadgesData } from "@/types/badge";

type PropType = {
    onBadgeSelect: (id: string) => void
}

const BadgeCards = (props: PropType) => {
    const badgeList: BadgesData = badgesJson as BadgesData;
    return (
        <Box className="p-0 pb-5 rounded-lg">
            <Box className="px-5 py-3 bg-background-elevation-3 rounded-t-lg">
                <h2 className="font-medium">Community Badges</h2>
            </Box>
            <Box className="flex overflow-x-auto space-x-2 p-5 bg-background-elevation-1 rounded-b-lg">
                {badgeList.map((badge, index) => (
                    <Box key={index}>
                        <BadgeCard badge={badge} onClick={props.onBadgeSelect} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BadgeCards;
