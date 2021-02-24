import Activity from "../../models/Activity";

export const ADD_ACTIVITY = 'ADD_ACTIVITY';

interface AddActivityAction {
    type: typeof ADD_ACTIVITY
    payload: Activity
}

export type ActivityTypes = AddActivityAction
