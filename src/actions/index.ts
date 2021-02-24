import Activity from "../models/Activity";
import { ActivityTypes, ADD_ACTIVITY } from "../types/Activity/ActivityTypes";
import { OPEN_ACTIVITY_DIALOG, CLOSE_ACTIVITY_DIALOG, DialogTypes } from "../types/Dialog/DialogTypes";

export const addActivity = (data: Activity): ActivityTypes => ({type: ADD_ACTIVITY, payload: data});
export const openActivityDialog = (): DialogTypes => ({type: OPEN_ACTIVITY_DIALOG});
export const closeActivityDialog = (): DialogTypes => ({type: CLOSE_ACTIVITY_DIALOG});
