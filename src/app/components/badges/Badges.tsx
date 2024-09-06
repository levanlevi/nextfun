import { Box, Card } from "@radix-ui/themes";
import Carousel from "./carousel/Carousel";
import CommunityBadges from "./community/CommunityBadges";
import Info from "./Info";
import ActionList from "./actions/ActionList";

const Badges = () => {
    return (
        <>
            <Box className="mb-5 bg-card-body">
                <Carousel />
                <Info />
                <ActionList />
            </Box>
            <CommunityBadges />
        </>
    );
};

export default Badges;
