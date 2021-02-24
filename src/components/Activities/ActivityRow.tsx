import * as React from 'react';
import Activity from '../../models/Activity';
import { ActionTypes } from '../../types/Activity/ActionTypes';
import { FC } from 'react';

const ActivityRow: FC<{
    activity: Activity
}> = (props: {
    activity: Activity
}) => {
    const {activity} = props;
    const buildPrefix = (): string => {
        switch (activity.activityType) {
            case ActionTypes.Note:
                return "added a note";
            case ActionTypes.Task:
                return "created a task";
            case ActionTypes.Enquiry:
                return "made a property enquiry";
            default:
                return ""
        }
    };

    return(
        <>
            <b>{`Ace Vinayak ${buildPrefix()}: `}</b>{activity.notes}
        </>
    )
};

export default ActivityRow;
