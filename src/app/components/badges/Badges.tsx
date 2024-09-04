import { Card } from "@radix-ui/themes";
import Carousel from "./Carousel";
import CommunityBadges from "./CommunityBadges";
import Info from "./Info";
import ActionList from "./actions/ActionList";

const Badges = () => {
    return (
        <>
            <Card className="mb-5" variant="classic">
                <Carousel />
                <Info />
                <ActionList />
            </Card>
            <CommunityBadges />
        </>
    );
};

export default Badges;
