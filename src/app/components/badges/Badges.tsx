import { Box, Card } from "@radix-ui/themes";
import Carousel from "./carousel/Carousel";
import CommunityBadges from "./community/CommunityBadges";
import Info from "./Info";
import ActionList from "./actions/ActionList";
import { useState } from "react";

const Badges = () => {

    const [selectedCardId, setSelectedCardId] = useState<string>('pudgyOg');

    const handleBadgeSelect = (id: string) => {
        setSelectedCardId(id);
    }

    return (
        <>
            <Box className="bg-background-elevation-1 mb-4 px-4 py-2 rounded-lg">
                <Carousel selectedCardId={selectedCardId} />
                <Info />
                <ActionList />
            </Box>
            <CommunityBadges onBadgeSelect={handleBadgeSelect} />
        </>
    );
};

export default Badges;
