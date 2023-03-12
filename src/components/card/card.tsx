import styles from './card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
//import { FavoriteContext } from './../../context/FavoriteContext';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    const { dispatch } = useContext(FavoriteContext);

    return (
        <div className={classNames(styles.root, className)}>
            {/* <span>text</span> */}
            {/* <img src={movie.poster_path} className={styles.cardImg} /> */}
            <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className={styles.cardImg}
            />
            <div className={styles.detail}>
                <h1>{movie.title.substring(0, 20)}</h1>
                {/* <span className={styles.rating}>{movie.vote_average.toFixed(1)}</span> */}
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles.desc}>{movie.overview.substring(0, 150)}</p>
                <button
                    className={styles.button}
                    onClick={() => dispatch({ type: 'ADD_MOVIE', payload: movie })}
                >
                    +
                </button>
            </div>
        </div>
    );
};
