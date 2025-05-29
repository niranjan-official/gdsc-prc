export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Timeline {
  id: number;
  tenure: string;
  year: number;
  members: TeamMember[];
  color: string;
}

export interface TeamsType {
  [year: number]: TeamMember[];
}
