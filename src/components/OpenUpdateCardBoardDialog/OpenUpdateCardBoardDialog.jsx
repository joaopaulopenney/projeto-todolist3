import '../OpenCardDialog/OpenCardDialog.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useState } from 'react';

export default function OpenUpdateCardBoardDialog({ open, dialogHandler, cardBoard, text, editCardBoard}) {

  const [editedTitle, setEditedTitle] = useState(text);

  const titleHandler = () => {
      editCardBoard(cardBoard.id, editedTitle);
      dialogHandler();
  }

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{fontWeight: "bolder"}} id="alert-dialog-title">
          {"Editar nota"}
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth style={{width: 500}} defaultValue={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight: "bolder"}} onClick={dialogHandler}>CANCELAR</Button>
          <Button style={{fontWeight: "bolder"}} onClick={titleHandler}>
            CONFIRMAR
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}