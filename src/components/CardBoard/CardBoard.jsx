import { useState } from 'react';
import './CardBoard.css';
import OpenCardDialog from '../OpenCardDialog/OpenCardDialog';
import Card from '../Card/Card';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import OpenUpdateCardBoardDialog from '../OpenUpdateCardBoardDialog/OpenUpdateCardBoardDialog';

const CardBoard = ({ cardBoard, addCard, deleteCard, deleteCardBoard, idDel, moveCard, moveCardBoardDialog, editCard, editCardBoard }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const dialogUpdateHandler = () => {
    setOpenUpdateDialog(!openUpdateDialog);
  }


  return (
    <div className={`cardboard ${cardBoard.id == 1 ? 'blue' : cardBoard.id == 2 ? 'purple' : cardBoard.id == 3 ? 'green' : ''}`}>
      <div className='container'>
      <h3 className='cb-title' onDoubleClick={dialogUpdateHandler} title='Clique duplo para editar'>{cardBoard.title} <OpenUpdateCardBoardDialog open={openUpdateDialog} dialogHandler={dialogUpdateHandler} cardBoard={cardBoard} text={cardBoard.title} editCardBoard={editCardBoard} /></h3>
      <button type='button' className={`iconDel ${cardBoard.id == 1 ? 'hideButton' : cardBoard.id == 2 ? 'hideButton' : cardBoard.id == 3 ? 'hideButton' : ''}`} onClick={() => deleteCardBoard(cardBoard.id, idDel)}><RemoveCircleOutlineIcon /></button>
      </div>
      <p className={`cb-text ${cardBoard.items.length <= 0 ? '' : 'none' }`}>Nenhum card adicionado</p>
      {cardBoard.items.map((item, index) => <Card key={index} item={item} id={index} deleteCard={deleteCard} cardBoard={cardBoard} moveCard={moveCard} moveCardBoardDialog={moveCardBoardDialog} editCard={editCard} />)}
      <OpenCardDialog open={openDialog} dialogHandler={dialogHandler} cardBoard={cardBoard} addCard={addCard} />
    </div>
  );
}

export default CardBoard;

