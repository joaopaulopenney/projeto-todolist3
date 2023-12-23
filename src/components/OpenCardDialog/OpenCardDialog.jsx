import './OpenCardDialog.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useState } from 'react';

export default function OpenCardDialog({ open, dialogHandler, cardBoard, addCard }) {

  const [text, setText] = useState("");

  const cardCreate = () => {
    if (text != "") {
      addCard(cardBoard.id, text);
      dialogHandler();
      setText("");
    }
  }

  return (
    <Fragment>
      <Button id='Button' variant="outlined" onClick={dialogHandler}>
        + ADICIONAR OUTRO CARD
      </Button>
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{fontWeight: "bolder"}} id="alert-dialog-title">
          {"Texto da nota"}
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth style={{width: 500}} onChange={(e) => setText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight: "bolder"}} onClick={dialogHandler}>CANCELAR</Button>
          <Button style={{fontWeight: "bolder"}} onClick={cardCreate}>
            CONFIRMAR
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}