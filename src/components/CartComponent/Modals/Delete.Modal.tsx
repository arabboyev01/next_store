import {Box} from "@mui/system";
import Style, {modalWrapper} from "./delete.style"
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
// @ts-ignore
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {useMediaQuery} from "@mui/material";
export type DeleteModalType = {
    title: string,
    open: any,
    handleClose: (e: any) => void
    onRemoveItem: (e: any) => void
    item: any,
}
const DeleteModal: React.FC<DeleteModalType> = ({title, handleClose, open, onRemoveItem, item}) => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 600px)')
    return (
        <Box>
            <Rodal
                animation="slideDown"
                closeOnEsc={true}
                showCloseButton={false}
                visible={open}
                onClose={handleClose}
                customStyles={modalWrapper}
                width={query ? 350 : 602}
                height={query ? 227 : 346}
            >
                <Box className={classes.contentWrapper}>
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
            </Rodal>
        </Box>
    )
}
export default DeleteModal
