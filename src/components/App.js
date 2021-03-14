import React from 'react';
import { connect } from 'react-redux';

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = ({ articles, searchTerm, onSearch }) =>
  <div>
    <Search value={searchTerm} onSearch={onSearch}>
      <p>Search</p>
      {/* <p>{articles}</p> */}
    </Search>

    {/* <Articles articles={articles.length > 0 ? articles.filter(applyFilter(searchTerm)) : []} /> */}
    <Articles articles={articles.filter(applyFilter(searchTerm))} />

  </div>

const Search = ({ value, onSearch, children }) =>
  <div>
    {children} <input
      className='form-control'
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
    />
  </div>

const Articles = ({ articles }) =>
  <ul>
    {articles.map(article =>
      <li key={article.id}>
        <Article article={article} />
      </li>
    )}
  </ul>

const Article = ({ article }) =>
  <div>{article.title}</div>

// connecting view layer to state layer with react-redux

const mapStateToProps = state => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm =>{
    console.log(searchTerm);
    dispatch({ type: 'SEARCH_SET', searchTerm })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
