import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import myContext from '../context/RecipeContext';
import { fetchAllMealNationalities } from '../services/fetchIngredientsNationalitiesApi';
import '../style/HeaderStyle.css';
import '../style/NationalitiesStyle.css';

function Nationalites() {
  const { nationalities, meals, setMeals, backup } = useContext(myContext);
  const myArrayNationatilies = [{ strArea: 'All' }, ...nationalities];
  const history = useHistory();
  /*   const { mealFilterNationalities, setMealFilterNationalities } = useState([]); */

  const handleChange = async ({ target }) => {
    const { value } = target;
    const limitMealNationalities = 12;
    if (value !== 'All') {
      const filterNationalities = await fetchAllMealNationalities(value);
      setMeals(filterNationalities.slice(0, limitMealNationalities));
    } else if (value === 'All') {
      setMeals(backup);
    }
  };

  const redirectToDetails = (idToRedirect) => {
    history.push(`/foods/${idToRedirect}`);
  };

  return (
    <div>
      <header className="header-container">
        <Link to="/profile">
          <button type="button" className="icons-header">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Explore Nationalities</h2>
        <button type="button" className="icons-header">
          <img src={ searchIcon } alt="logo-search" data-testid="search-top-btn" />
        </button>
      </header>
      <div>
        { nationalities.length && meals.length > 0
          ? (
            <div>
              <div className="select-container">
                <label htmlFor="nationalities-filter">
                  <select
                    data-testid="explore-by-nationality-dropdown"
                    onChange={ handleChange }
                    className="select-input"
                  >
                    {myArrayNationatilies.map((option, index) => (
                      <option
                        key={ index }
                        value={ option.strArea }
                        data-testid={ `${option.strArea}-option` }
                      >
                        { option.strArea }
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="list-container-nationalities">
                {meals.map((meal, index) => (
                  <div
                    key={ index }
                    data-testid={ `${index}-recipe-card` }
                    onClick={ () => redirectToDetails(meal.idMeal) }
                    aria-hidden="true"
                    className="card-container-nationalities"
                  >
                    <img
                      src={ meal.strMealThumb }
                      alt={ meal.strMeal }
                      data-testid={ `${index}-card-img` }
                      className="list-picture-nationalities"
                    />
                    <div>
                      <span
                        data-testid={ `${index}-card-name` }
                        className="list-name-nationalities"
                      >
                        { meal.strMeal }
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>) : ''}
      </div>
      <Footer />
    </div>
  );
}

export default Nationalites;
