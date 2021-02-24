import * as React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { addActivity, closeActivityDialog } from '../../../actions';
import useFormFields from '../../../hooks/useFormFields';
import Activity from '../../../models/Activity';
import { RootState } from '../../../reducers';
import ActivityDialogContent from './ActivityDialogContent';

const ActivityDialog: FC = () => {
    const dispatch = useDispatch();
    const openDialog = useSelector((state: RootState): boolean => state.dialog.isActivityDialogOpened);
    const emptyForm: Activity = {
        id: Date.now(),
        activityType: "",
        propertyURL: "",
        notes: ""
    };
    const [fields, setFields] = useFormFields<Activity>(emptyForm);
    const handleSubmitActivity = (): void => {
        dispatch(addActivity(fields));
        dispatch(closeActivityDialog());
    };

    return (
        <Modal open={openDialog} onClose={() => dispatch(closeActivityDialog())} size={'small'}>
            <Modal.Header>Add Activity</Modal.Header>
            <Modal.Content>
                <ActivityDialogContent fields={fields} setFields={setFields}/>
            </Modal.Content>
            <Modal.Actions>
                <Button disabled={!fields.notes} onClick={handleSubmitActivity}>Submit</Button>
            </Modal.Actions>
        </Modal>
    )
};

export default ActivityDialog;
