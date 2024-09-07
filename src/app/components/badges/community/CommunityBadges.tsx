import { Box } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgesData } from "@/types/badge";

type PropType = {
    badgeList: BadgesData,
    onBadgeSelect: (id: string) => void
}

const BadgeCards = (props: PropType) => {
    return (
        <Box className="p-0 pb-5 rounded-lg">
            <Box className="px-5 py-3 bg-background-elevation-3 rounded-t-lg">
                <h2 className="font-medium">Community Badges</h2>
            </Box>
            <Box className="flex w-full flex-wrap overflow-x-auto space-x-4 p-5 bg-background-elevation-1 rounded-b-lg scrollbar-thin scrollbar-thumb-primary-hover
            sm:flex-nowrap">
                {props.badgeList.map((badge, index) => (
                    <Box key={index} className="flex-shrink-0 sm:m-0">
                        <BadgeCard badge={badge} onClick={props.onBadgeSelect} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BadgeCards;
