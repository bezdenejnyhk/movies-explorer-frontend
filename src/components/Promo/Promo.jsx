import './Promo.css';
import landingLogo from "../../images/landingLogo.svg"

export default function Promo() {
return (
    <div className='promo'>
        <div className='promo__conteiner'>
        <div className='caption'>
        <h1 className='caption__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='caption__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='promo__homeImg' src={landingLogo} alt='Изображение шара' />
        </div>
        {/* <button className='promo__btn'>Узнать больше</button> */}
    </div>
)
}