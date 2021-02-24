import Activity from "./Activity";
import TeamMember from "./TeamMember";

export interface ActivitiesState {
    activities: Activity[],
    teamMembers?: TeamMember[]
}