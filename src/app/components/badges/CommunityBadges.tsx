import { Box, Card } from "@radix-ui/themes";
import CommunityBadge from "./CommunityBadge";

const CommunityBadges = () => {
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
        <Card className="p-0 pb-5" variant="classic">
            <Box className="px-5 py-3 bg-card-header">
                <h2>Community Badges</h2>
            </Box>
            <Box className="flex space-x-2 p-5 .bg-card-body">
                {badges.map((badge, index) => (
                    <CommunityBadge
                        key={index}
                        name={badge.name}
                        image={badge.image}
                        multiplier={badge.multiplier}
                        selected={badge.selected} />
                ))}
            </Box>
        </Card>
    );
};

export default CommunityBadges;
