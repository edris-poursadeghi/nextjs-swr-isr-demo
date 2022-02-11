import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div className="nav wrap">
          <div className="logo">
            <h1>SWR</h1>
          </div>

          <form>
            <input
              type="text"
              name=""
              required
              placeholder="Enter your search"
            />
            <button>serach</button>
          </form>

          <div className="row" aria-label="prev">
            <button className="prev">
              <i className="fas fa-chevron-left" />
            </button>
            <span>1</span>

            <button className="next" aria-label="next">
              <i className="fas fa-chevron-right" />
            </button>
          </div>

          <div>
            <label htmlFor="pre-page">Per Page:</label>
            <select id="per-page">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
