import { Box, Card } from "@radix-ui/themes";
import Carousel from "./carousel/Carousel";
import CommunityBadges from "./community/CommunityBadges";
import Info from "./Info";
import ActionList from "./actions/ActionList";
import { useEffect, useState } from "react";
import badgesJson from './../../../../public/data/badges.json';
import { BadgesData } from "@/types/badge";

const Badges = () => {
    const badgeList: BadgesData = badgesJson as BadgesData;
    const [badges, setBadges] = useState<BadgesData>(badgeList);
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
    
    const setSelectedCard = (id: string) => {
        badges.forEach(b => {
            b.selected = b.id === id;
        });
        setBadges(badges);
        setSelectedCardId(id);
    };

    return (
        <>
            <Box className="bg-background-elevation-1 mb-4 px-4 py-2 rounded-lg">
                <Carousel
                    badgeList={badges}
                    selectedCardId={selectedCardId}
                    onSelectedCardChange={setSelectedCard} />
                <Info />
                <ActionList />
            </Box>
            <CommunityBadges
                badgeList={badges}
                onBadgeSelect={setSelectedCard} />
        </>
    );
};

export default Badges;
