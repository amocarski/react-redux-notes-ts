import * as React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import Activity from '../../models/Activity';
import { RootState } from '../../reducers';
import ActivityRow from './ActivityRow';

const ActivityList: FC = () => {
    const activities = useSelector((state: RootState) => state.activities.activities);

    return(
        <Segment.Group>
            {activities?.map((activity: Activity) => <Segment key={activity.id}><ActivityRow activity={activity} /></Segment>)}
        </Segment.Group>
    )
};

export default ActivityList;
