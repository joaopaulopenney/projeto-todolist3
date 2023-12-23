import './OpenMoveCardDialog.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment } from 'react';

export default function OpenMoveCardDialog({ open, dialogHandler, moveCardBoardDialog, item, cardBoard, id}) {

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{fontWeight: 'bolder'}} id="alert-dialog-title">
          {"Mudar a posição da nota para:"}
        </DialogTitle>
        <DialogContent className='dialog-content' >
          {moveCardBoardDialog(id, item.text, cardBoard.items)}
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </Fragment>
  );
}