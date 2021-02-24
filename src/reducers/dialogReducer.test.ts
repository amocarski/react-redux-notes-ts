import { closeActivityDialog, openActivityDialog } from "../actions"
import dialogReducer, { initialState } from "./dialogReducer"

describe('dialogReducer action type responses for', () => {
    describe('openActivityDialog', () => {
        const action = openActivityDialog()
        const newState = dialogReducer(initialState, action)

        it('opened activity dialog', () => {
            expect(newState.isActivityDialogOpened).toEqual(true);
        })
    });
    describe('closeActivityDialog', () => {
        const action = closeActivityDialog()
        const newState = dialogReducer(initialState, action)

        it('closed activity dialog', () => {
            expect(newState.isActivityDialogOpened).toEqual(false);
        })
    })
})
