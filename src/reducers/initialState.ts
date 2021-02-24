import { ActionTypes } from '../types/Activity/ActionTypes';
import Activity from '../models/Activity';
import TeamMember from '../models/TeamMember';

export const teamMembers: TeamMember[] = [
    {
        id: Math.random(),
        name: 'John Smith',
        email: 'smith@yahoo.com'
    },
    {
        id: Math.random(),
        name: 'Tom Blob',
        email: 'blob@yahoo.com'
    },
    {
        id: Math.random(),
        name: 'Richard Doe',
        email: 'doe@yahoo.com'
    },
];

export const initialActivities: Activity[] = [
    {
        id: Math.random(),
        activityType: ActionTypes.Note,
        propertyURL: "https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M",
        notes: "He's increased his budget by a 100$ per month."
    },
    {
        id: Math.random(),
        activityType: ActionTypes.Note,
        propertyURL: "https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M",
        notes: "He's increased his budget by a 100$ per month."
    },
    {
        id: Math.random(),
        activityType: ActionTypes.Note,
        propertyURL: "https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M",
        notes: "He's increased his budget by a 100$ per month."
    }
];
