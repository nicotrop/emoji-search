const Search = ({ text, setText }) => {
  return (
    <div className="search">
      <h1>😎 Emoji Search 😎</h1>
      <form role="search">
        <input
          type="search"
          id="query"
          placeholder="What emoji are you looking for?"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
