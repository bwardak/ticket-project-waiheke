import { FormEventHandler } from 'react';
import './SearchBox.scss'

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>
}

const SearchBox = ({ label, searchTerm, handleInput }: SearchBoxProps) => {
    
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
      placeholder="Search name here..."
      className='search-box__input' />
    </div>
  );
};

export default SearchBox