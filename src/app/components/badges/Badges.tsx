import { Box, Card } from "@radix-ui/themes";
import Carousel from "./carousel/Carousel";
import CommunityBadges from "./community/CommunityBadges";
import Info from "./Info";
import ActionList from "./actions/ActionList";

const Badges = () => {
    return (
        <>
            <Box className="bg-background-elevation-1 mb-4 px-4 py-2 bg-card-body rounded-bg">
                <Carousel />
                <Info />
                <ActionList />
            </Box>
            <CommunityBadges />
        </>
    );
};

export default Badges;
