import { TimelineData } from "./TimeLine";
import { Team_2020, Team_2022, Team_2023, Team_2024 } from "./Teams";
import { TeamsType } from "@/types";

// Add new team [ YEAR : Team_[YEAR] ]
const Teams : TeamsType = {
  2020: Team_2020,
  2022: Team_2022,
  2023: Team_2023,
  2024: Team_2024,
};

export { TimelineData, Teams };
