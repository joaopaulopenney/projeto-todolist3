import { useState } from "react";
import Header from "../components/Header/Header";
import CardBoard from "../components/CardBoard/CardBoard";
import './Home.css'

const Home = () => {

    const [cardBoards, setCardBoards] = useState([{ title: "To do", id: 1, items: [] }, { title: "Doing", id: 2, items: [] }, { title: "Done", id: 3, items: [] }]);

    const addCardBoard = (cardBoard) => {
      setCardBoards([...cardBoards, cardBoard]);
    }

    const addCard = (id, text) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items.push({text});
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const deleteCard = (id, cardId) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items.splice(cardId, 1);
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const moveCard = (id, fromIndex, toIndex) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items.splice(toIndex, 0, cardBoardsArray[i].items.splice(fromIndex, 1)[0]);
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const editCard = (id, cardId, editedText) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items[cardId].text = editedText;
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const moveToCardBoard = (itemId, text, toItems, fromItems, id) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          toItems.push({text});
          console.log(itemId);
          fromItems.splice(itemId, 1);
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const moveCardBoardDialog = (itemId, itemText, fromItems) => {
      return (
      cardBoards.map((cardBoard) => (
        <div key={cardBoard.id}>
          <button type="button" className={`move-cb-btn ${cardBoard.id == 1 ? 'btn-blue' : cardBoard.id == 2 ? 'btn-purple' : cardBoard.id == 3 ? 'btn-green' : ''}`} onClick={() => moveToCardBoard(itemId, itemText, cardBoard.items, fromItems, cardBoard.id)}>{cardBoard.title}</button>
        </div>
      ))
      )
    }

  return (
    <>
      <Header addCardBoard={addCardBoard} />
      <section id="cardboards-list">
        {cardBoards.map((cardBoard) => (
          <div key={cardBoard.id}>
            <CardBoard cardBoard={cardBoard} addCard={addCard} deleteCard={deleteCard} moveCard={moveCard} moveCardBoardDialog={moveCardBoardDialog} editCard={editCard} />
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
