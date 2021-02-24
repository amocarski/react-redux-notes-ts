import { ActivitiesState } from '../models/ActivitiesState';
import { ActivityTypes, ADD_ACTIVITY } from '../types/Activity/ActivityTypes';
import { initialActivities, teamMembers } from './initialState';

export const initialState: ActivitiesState = {activities: initialActivities, teamMembers: teamMembers};

const activitiesReducer = (state = initialState, action: ActivityTypes): ActivitiesState => {
    switch (action.type) {
        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            };
        default:
            return state;
    }
};

export default activitiesReducer;
