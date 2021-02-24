import { DialogState } from '../models/DialogState';
import { CLOSE_ACTIVITY_DIALOG, DialogTypes, OPEN_ACTIVITY_DIALOG } from '../types/Dialog/DialogTypes';

export const initialState: DialogState = {isActivityDialogOpened: false}

const dialogReducer = (state = initialState, action: DialogTypes): DialogState => {
    switch (action.type) {
        case OPEN_ACTIVITY_DIALOG:
            return {
                ...state,
                isActivityDialogOpened: true
            };
        case CLOSE_ACTIVITY_DIALOG:
            return {
                ...state,
                isActivityDialogOpened: false
            };
        default:
            return state;
    }
};

export default dialogReducer;
