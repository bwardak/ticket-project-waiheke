import { FormEventHandler } from 'react';
import team from '../../data/team'
import './SearchBox.scss'

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>
}

const searchBox = ({ label, searchTerm, handleInput }: SearchBoxProps) => {
    
  return (
    <div className='search-box'>
      <label htmlFor={label} className='search-box__label'>
        {label}
      </label>
      <input type="text"
      id={label}
      name={label}
      value={searchTerm}
      onInput={handleInput}
      className='search-box__input' />
    </div>
  );
};

export default searchBox