/* eslint-disable react/display-name */
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ActivityList from './ActivitiesList';
import { Button, Icon, Tab } from 'semantic-ui-react';
import ActivityDialog from "./ActivityDialog/ActivityDialog";
import { openActivityDialog } from '../../actions';

const Activities: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Button icon labelPosition='left' onClick={() => dispatch(openActivityDialog())}>
            <Icon name='add circle' />
                Add new activity
            </Button>
            <ActivityList />
            <ActivityDialog />
        </>
    )
}

const ActivityFeed: FC = () => {
    const panes = [
        {
            menuItem: 'Activity Feed', render: () => <Tab.Pane><Activities /></Tab.Pane>
        },
        {
            menuItem: 'Stats', render: () => <Tab.Pane>{"Data not available"}</Tab.Pane>
        },
        {
        menuItem: 'Documents', render: () => <Tab.Pane>{"Data not available"}</Tab.Pane>
        }
    ]

    return (
        <Tab panes={panes} />
    );
};

export default ActivityFeed;
