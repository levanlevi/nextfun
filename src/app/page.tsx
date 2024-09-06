"use client";

import { Heading, Text } from "@radix-ui/themes";
import LastActivities from "./components/LastActivities";
import Badges from "./components/badges/Badges";

export default function Home() {
  return (
    <div>
      <Text className="mb-2 text-text-secondary font-semibold">Last Activities</Text>
      <LastActivities />
      <Text className="mt-5 mb-2 text-text-secondary font-semibold">Badges</Text>
      <Badges />
    </div>
  );
}
