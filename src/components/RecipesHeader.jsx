import React from 'react';
import PropTypes from 'prop-types';

function RecipesHeader(props) {
  const iconStyle = { fontSize: '24px' };
  const { thumb, name, category } = props;

  return (
    <div>
      <img data-testid="recipe-photo" src={ thumb } alt="" />

      <h3 data-testid="recipe-title">{ name }</h3>

      <button type="button" data-testid="share-btn">
        <i style={ iconStyle } className="fa">&#xf1e0;</i>
      </button>

      <button type="button" data-testid="favorite-btn">
        <i style={ iconStyle } className="fa">&#xf1e0;</i>
      </button>

      <h4>{ category }</h4>
    </div>
  );
}

RecipesHeader.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default RecipesHeader;
