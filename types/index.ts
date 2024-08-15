export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Timeline {
  tenure: string;
  year: number;
  members: TeamMember[];
  color: string;
}

export interface TeamsType {
  [year: number]: TeamMember[];
}
