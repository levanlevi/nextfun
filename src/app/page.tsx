"use client";

import { Box, Heading, Text } from "@radix-ui/themes";
import LastActivities from "./components/LastActivities";
import Badges from "./components/badges/Badges";

export default function Home() {
  return (
    <div>
      <Box className="mb-2 text-text-secondary font-semibold">
        <Text>
          Last Activities
        </Text>
      </Box>
      <LastActivities />
      <Box className="mt-5 mb-4 text-text-secondary font-semibold">
        <Text>
          Badges
        </Text>
      </Box>
      <Badges />
    </div>
  );
}
