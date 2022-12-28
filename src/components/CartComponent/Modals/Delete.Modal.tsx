import {Box} from "@mui/system";
import Style from "./delete.style"
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';

export type DeleteModalType = {
    title: string,
    open: any,
    handleClose: (e: any) => void
    onRemoveItem: (e: any) => void
    item: any,
}
const DeleteModal: React.FC<DeleteModalType> = ({title, handleClose, open, onRemoveItem, item}) => {
    const classes = Style();
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modalWrapper}>
                    <Box className={classes.delete}>
                        <DeleteIcon className={classes.deleteIcon}/>
                    </Box>
                    <Typography className={classes.title}>{title}</Typography>
                    <Box className={classes.buttons}>
                        <Button className={classes.goBack} onClick={handleClose}>Yo&apos;q ortga</Button>
                        <Box onClick={handleClose}>
                            <Button className={classes.yesDelete} onClick={() => onRemoveItem(item)}>Ha
                                o&apos;chirilsin</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}
export default DeleteModal
