import '@/styles/radio-custom.css';

export default function RadioFilterGroup() {
  const options = ['Estudos', 'Finanças', 'Saúde', 'Tarefas'];

  return (
    <div className="radio-button-container flex flex-col gap-2">
      {options.map((option, index) => (
        <div className="radio-button" key={index}>
          <input
            type="radio"
            className="radio-button__input"
            id={`radio-${index}`}
            name="filter-group"
          />
          <label className="radio-button__label" htmlFor={`radio-${index}`}>
            <span className="radio-button__custom"></span>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}
