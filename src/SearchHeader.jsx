function SearchHeader({search}) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchName = formData.get('searchName');
    search(searchName);
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="card">
            <div className="card-content">
              <label  className="label">Ne Arıyorsunuz?</label>
              <input id="searchName" name="searchName" type="text" className="input" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchHeader;
