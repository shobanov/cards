import Circle from '../Circle';
import deckStyles from './Deck.module.scss';

interface IProps {
  showCircle?: boolean;
  commonDeckHandler?: () => void;
}

const Deck: React.FC<IProps> = ({ showCircle, commonDeckHandler }) => {
  return (
    <div className={deckStyles.decks} onClick={commonDeckHandler}>
      {showCircle && <Circle />}
    </div>
  );
};

export default Deck;
