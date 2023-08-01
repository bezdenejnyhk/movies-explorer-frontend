import "./FilterCheckbox.css";

export default function FilterCheckbox({ isChecked, onCheck }) {
  return (
    <label className="filter-Сheckbox" id="checkbox">
      <input
        className="filter-Checkbox__input"
        type="checkbox"
        id="checkbox"
        onChange={onCheck}
        checked={isChecked || ""}
      />
      <span className="filter-Checkbox__text">Короткометражки</span>
    </label>
  );
}
