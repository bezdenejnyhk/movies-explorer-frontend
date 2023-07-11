import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <label className='filter-Сheckbox' id='checkbox'>
      <input
        className='filter-Checkbox__input'
        type='checkbox'
        id='checkbox'
      />
      <span className='filter-Checkbox__text'>Короткометражки</span>
    </label>
  );
}
