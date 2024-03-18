import PropTypes from 'prop-types';
import '../stylesheets/Button.css';
import '../App.css';

function Button({ clase, value, func }){

    return(
        <input className={clase} type="button" value={value} onClick={ func }/>
    );
}

Button.propTypes = {
    clase: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Button;