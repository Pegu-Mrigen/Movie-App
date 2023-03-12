import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 111,
                overview:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi dignissimos quas itaque, qui ex vero expedita! Ad similique quisquam voluptatem autem architecto minima fuga neque dolores consequatur sit, porro natus saepe repudiandae illum? Voluptate odit fugiat recusandae iusto vel reiciendis esse dignissimos sequi, rerum nihil alias placeat cum et magni non libero blanditiis. Quod rerum aliquam voluptas temporibus error optio veniam quae neque voluptatem iste ad et, corrupti quia molestias dolorum! Ex illum reprehenderit, est hic iusto ea aperiam quia mollitia ipsam at dolore similique repellat possimus placeat laborum.',
                release_date: '2022',
                title: 'New Movie',
                vote_average: 7,
                poster_path:
                    'https://mrigen.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGYM.8164eabe.jpg&w=1920&q=75',
            }}
        />
    ),
    environmentProps: {
        windowBackgroundColor: '#636262',
        canvasWidth: 808,
    },
});
