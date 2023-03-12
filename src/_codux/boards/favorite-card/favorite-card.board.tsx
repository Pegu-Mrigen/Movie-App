import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 44,
                overview:
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum mollitia deserunt maxime laudantium dignissimos quibusdam consequuntur qui veritatis libero eveniet?',
                release_date: '2022',
                title: 'GYM thumbnail',
                vote_average: 4,
                poster_path:
                    'https://mrigen.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGYM.8164eabe.jpg&w=1920&q=75',
            }}
        />
    ),
    environmentProps: {
        windowHeight: 834,
        windowWidth: 940,
        canvasHeight: 447,
    },
});
