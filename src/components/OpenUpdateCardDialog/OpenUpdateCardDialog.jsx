import '../OpenCardDialog/OpenCardDialog.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useState } from 'react';

export default function OpenUpdateCardDialog({ open, dialogHandler, cardBoard, text, id, editCard}) {

  const [editedText, setEditedText] = useState(text);

  const textHandler = () => {
      editCard(cardBoard.id, id, editedText);
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
          <TextField fullWidth style={{width: 500}} defaultValue={editedText} onChange={(e) => setEditedText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight: "bolder"}} onClick={dialogHandler}>CANCELAR</Button>
          <Button style={{fontWeight: "bolder"}} onClick={textHandler}>
            CONFIRMAR
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}