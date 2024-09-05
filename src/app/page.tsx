"use client";

import { Heading } from "@radix-ui/themes";
import LastActivities from "./components/LastActivities";
import CommunityBadges from "./components/badges/CommunityBadges";
import Badges from "./components/badges/Badges";
import { useContext } from 'react';

export default function Home() {
  return (
    <div>
      <Heading className="mb-2">Last Activities</Heading>
      <LastActivities />
      <Heading className="mt-5 mb-2">Badges</Heading>
      <Badges />
    </div>
  );
}
