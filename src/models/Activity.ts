
export default interface Activity {
    id: number;
    activityType: string;
    propertyURL: string;
    notes: string;
    assignee?: string;
}
