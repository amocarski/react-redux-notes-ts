import * as React from 'react';
import { FC, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';
import Activity from '../../../models/Activity';
import { SelectOptions } from '../../../models/SelectOptions';
import TeamMember from '../../../models/TeamMember';
import { RootState } from '../../../reducers';
import { ActionTypes } from '../../../types/Activity/ActionTypes';

interface ActivityDialogContentProps {
    fields: Activity,
    setFields: (event: SyntheticEvent<HTMLElement>, data: any) => any
}

const ActivityDialogContent: FC<ActivityDialogContentProps> = (props: ActivityDialogContentProps) => {
    const { fields, setFields } = props;
    const teamMembers = useSelector((state: RootState) => state.activities.teamMembers);
    const getEnquiries = (): SelectOptions[] => {
        const options: SelectOptions[] = [];
        for (const enquiry in ActionTypes) {
            if (isNaN(Number(enquiry))) {
                options.push({
                    key: enquiry,
                    text: enquiry,
                    value: enquiry
                });
            }
        }
        return options;
    };
    const getTeamMembers = (): SelectOptions[] => {
        const options: SelectOptions[] = [];
        // had to use only user email cuz of Semantic UI limitation to string as a value property
        teamMembers?.map((member: TeamMember) => {
            options.push({
                key: member.id,
                text: member.name,
                value: member.email
            })
        });
        return options;
    };

    return (
        <Form>
            <Form.Group inline>
                <Form.Select name='activityType' onChange={setFields} value={fields.activityType} fluid selection label='Add Enquiry' placeholder={'Add Enquiry'} options={getEnquiries()} />
            </Form.Group>
            {/*had to use ActionTypes[ActionTypes.Task] instead of ActionTypes.Task cuz Semantic UI cant handle 0 as a value -_-*/}
            {fields.activityType === ActionTypes[ActionTypes.Task] ?
                <Form.Group inline>
                    <Form.Select name='members' onChange={setFields} fluid label='Team member' placeholder={'Team member'} options={getTeamMembers()} />
                </Form.Group>
                :
                <Form.Group inline>
                    <Form.Input name='propertyURL' onChange={setFields} fluid label='Add property URL (optional)' placeholder='Property URL' />
                </Form.Group>
            }
            <Form.TextArea name='notes' onChange={setFields} label='About' placeholder='Add notes...' />
        </Form>
    )
};

export default ActivityDialogContent;
