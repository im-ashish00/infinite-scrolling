import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading, error, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('Start Loading 🚀');
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light mb-3">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            Does this Book Exist?
          </a>

          <div>
            <form className="d-flex justify-content-end" role="search">
              <input
                onChange={handleSearch}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={book} className="mb-3">
                <div className="navbar bg-light">
                  <div className="container-fluid">
                    <span className="navbar-text">{book}</span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={book} className="mb-2">
                <div className="navbar bg-light">
                  <div className="container-fluid">
                    <span className="navbar-text">{book}</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {loading && (
          <div className="my-3 text-success text-opacity-75 ">Loading...</div>
        )}
	{error && (
          <div className="my-3 text-danger text-opacity-75 ">
            Something went wrong !!
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
