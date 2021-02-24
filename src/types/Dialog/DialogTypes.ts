export const OPEN_ACTIVITY_DIALOG = 'OPEN_ACTIVITY_DIALOG';
export const CLOSE_ACTIVITY_DIALOG = 'CLOSE_ACTIVITY_DIALOG';


interface OpenActivityDialogAction {
    type: typeof OPEN_ACTIVITY_DIALOG
}

interface CloseActivityDialogAction {
    type: typeof CLOSE_ACTIVITY_DIALOG
}

export type DialogTypes = OpenActivityDialogAction | CloseActivityDialogAction
