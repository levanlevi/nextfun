import { Card } from "@radix-ui/themes";
import Carousel from "./carousel/Carousel";
import CommunityBadges from "./community/CommunityBadges";
import Info from "./Info";
import ActionList from "./actions/ActionList";

const Badges = () => {
    return (
        <>
            <Card className="mb-5 bg-card-body" variant="classic">
                <Carousel />
                <Info />
                <ActionList />
            </Card>
            <CommunityBadges />
        </>
    );
};

export default Badges;
