import { addActivity } from "../actions"
import { ActionTypes } from "../types/Activity/ActionTypes"
import activitiesReducer, { initialState } from "./activitiesReducer"

describe('activitiesReducer action type responses for', () => {
    describe('addActivity', () => {
        const newActivity = {id: Date.now(), activityType: ActionTypes.Note, propertyURL: "http", notes: "example note"};
        const action = addActivity(newActivity)
        const newState = activitiesReducer(initialState, action);

        it('added new activity', () => {
            const expected = [...initialState.activities, newActivity]
            expect(newState.activities).toEqual(expected);
        })
    })
})
