import './Card.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import OpenMoveCardDialog from '../OpenMoveCardDialog/OpenMoveCardDialog';
import OpenUpdateCardDialog from '../OpenUpdateCardDialog/OpenUpdateCardDialog';

const Card = ({ item, id, deleteCard, cardBoard, moveCard, moveCardBoardDialog, editCard }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const dialogUpdateHandler = () => {
    setOpenUpdateDialog(!openUpdateDialog);
  }

  return (
    <div className='card'>
      <p className='text' onDoubleClick={dialogUpdateHandler} title='Clique duplo para editar'>{item.text} <OpenUpdateCardDialog open={openUpdateDialog} dialogHandler={dialogUpdateHandler} cardBoard={cardBoard} text={item.text} id={id} editCard={editCard} /></p>
      <div className='icons'>
        <button type='button' className='icon' onClick={() => { 
            if (id >= 1) {
              moveCard(cardBoard.id, id, id - 1);
            }
          }}><ExpandLessIcon /></button>
        <button type='button' className='icon' onClick={() => { 
            if (id <= cardBoard.items.length - 1) {
              moveCard(cardBoard.id, id, id + 1);
            }
          }}><ExpandMoreIcon /></button>
        <button type='button' className='icon' onClick={dialogHandler}><OpenMoveCardDialog open={openDialog} dialogHandler={dialogHandler} moveCardBoardDialog={moveCardBoardDialog} item={item} cardBoard={cardBoard} id={id} /><MoveToInboxIcon /></button>
        <button type='button' className='icon' onClick={() => deleteCard(cardBoard.id, id)}><HighlightOffIcon /></button>
      </div>
    </div>
  );
}

export default Card;