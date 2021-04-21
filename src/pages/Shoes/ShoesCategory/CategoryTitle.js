import React, { Component } from 'react';

class CategoryTitle extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="CategoryTitle">
        {data.map(input => (
          <h2 key={input.id}>{input.text}</h2>
        ))}
      </div>
    );
  }
}

export default CategoryTitle;