import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map( (book, index) => {
      return(
        <li onClick={() => this.props.selectBook(book)} key={index} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

// Any value that is returned form this function, it will be called as props
// on the BookList container
function mapDispatchToProps(dispatch){
  console.log(dispatch)
  // when selectBook is called the result is passed to all of the reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
