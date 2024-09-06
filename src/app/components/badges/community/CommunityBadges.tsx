import { Box, Card } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";

const BadgeCards = () => {
    const badges = [{
        name: "Pudgy OG",
        image: "pudgyOg",
        multiplier: "1.5",
        selected: true
    }, {
        name: "Discord OG",
        image: "discordOg",
        multiplier: "1.5",
    }];

    return (
        <Box className="p-0 pb-5 rounded-lg">
            <Box className="px-5 py-3 bg-background-elevation-3 rounded-t-lg">
                <h2 className="font-medium">Community Badges</h2>
            </Box>
            <Box className="flex space-x-2 p-5 bg-background-elevation-1 rounded-b-lg">
                {badges.map((badge, index) => (
                    <BadgeCard
                        key={index}
                        name={badge.name}
                        image={badge.image}
                        multiplier={badge.multiplier}
                        selected={badge.selected}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default BadgeCards;
