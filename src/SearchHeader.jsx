import { useState } from "react";


function SearchHeader({search}) {
  const [valueInput, SetValue] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
     search(valueInput);
  };

 
 const handleChange = (event) => {
    SetValue(event.target.value);
  }
  return (    
      <div >
        <form onSubmit={handleFormSubmit}>
          <div className="card">
            <div className="card-content">
              <label  className="label">Ne Arıyorsunuz?  </label>              
              <input value={valueInput} onChange={handleChange} id="searchName" name="searchName" type="text" className="input" />
            </div>
          </div>
        </form>
      </div>
  );
}

export default SearchHeader;
