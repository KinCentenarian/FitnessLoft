export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Absent = placeholder visuel */
  image?: string;
}

export interface TeamContent {
  watermark: string;
  title: string;
  description: string;
  stats: { value: number; prefix?: string; suffix?: string; label: string }[];
  members: TeamMember[];
}
