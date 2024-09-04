import { Heading } from "@radix-ui/themes";
import LastActivities from "./components/LastActivities";

export default function Home() {
  return (
    <div>
      <Heading className="mb-2">Last Activities</Heading>
      <LastActivities />
    </div>
  );
}
