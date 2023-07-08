import './MoviesCard.css';
import imageFilm from '../../images/imageFilm.png';

export default function MoviesCard() {
  return (
    <li className='movies-Card'>
      <div className='movies-Card__box'>
        <div className='movies-Card__info'>
          <h2 className='movies-Card__title'>33 слова о дизайне</h2>
          <p className='movies-Card__time'>1ч 47м</p>
        </div>
        <button className='movies-Card__btn'></button>
      </div>
      <img
        className='movies-Card__pic'
        src={imageFilm}
        alt='Картинка к фильму'
      />
    </li>
  );
}