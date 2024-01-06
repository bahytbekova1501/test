import "./Search.css";
import search from "../../img/logo/Search.svg";
function Search() {
  return (
    <div className="search">
      <div className="search_icon">
        <img src={search} alt="" />
      </div>

      <form className="search_form">
        <input className="input_for_search" type="text" placeholder="Поиск" />

        {/* <button>
          <img alt="" />
        </button> */}
      </form>
    </div>
  );
}

export default Search;
