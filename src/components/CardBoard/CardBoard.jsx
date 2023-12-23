import { useState } from 'react';
import './CardBoard.css';
import OpenCardDialog from '../OpenCardDialog/OpenCardDialog';
import Card from '../Card/Card';

const CardBoard = ({ cardBoard, addCard, deleteCard, moveCard, moveCardBoardDialog, editCard }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <div className={`cardboard ${cardBoard.id == 1 ? 'blue' : cardBoard.id == 2 ? 'purple' : cardBoard.id == 3 ? 'green' : ''}`}>
      <h3 className='cb-title'>{cardBoard.title}</h3>
      <p className={`cb-text ${cardBoard.items.length <= 0 ? '' : 'none' }`}>Nenhum card adicionado</p>
      {cardBoard.items.map((item, index) => <Card key={index} item={item} id={index} deleteCard={deleteCard} cardBoard={cardBoard} moveCard={moveCard} moveCardBoardDialog={moveCardBoardDialog} editCard={editCard} />)}
      <OpenCardDialog open={openDialog} dialogHandler={dialogHandler} cardBoard={cardBoard} addCard={addCard} />
    </div>
  );
}

export default CardBoard;

