import { Timeline } from "@/types";
import { Team_2020, Team_2022, Team_2023 } from "./Teams";

// Add new Timeline in the end, also import the new team
export const TimelineData: Timeline[] = [
  {
    tenure: "2020-2021",
    year: 2020,
    members: Team_2020,
    color: "gdsc-1",
  },
  {
    tenure: "2022-2023",
    year: 2022,
    members: Team_2022,
    color: "gdsc-2",
  },
  {
    tenure: "2023-2024",
    year: 2023,
    members: Team_2023,
    color: "gdsc-3",
  },
];
