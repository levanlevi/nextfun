import { Heading } from "@radix-ui/themes";
import LastActivities from "./components/LastActivities";
import CommunityBadges from "./components/badges/CommunityBadges";

export default function Home() {
  return (
    <div>
      <Heading className="mb-2">Last Activities</Heading>
      <LastActivities />
      <div className="mt-5">
        <CommunityBadges />
      </div>
    </div>
  );
}
