import { createBoard } from '@wixc3/react-board';
import { Favorite } from '../../../components/favorite/favorite';

export default createBoard({
    name: 'Favorite',
    Board: () => <Favorite />
});
