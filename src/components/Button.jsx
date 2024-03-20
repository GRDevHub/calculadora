import PropTypes from 'prop-types';
import '../stylesheets/Button.css';
import '../App.css';

function Button({ clase, func, children, type }){

    return(
        <input className={ clase } type={ type } value={ children } onClick={ () => func(children) }/> 
    );
}

Button.defaultProps = {
    name: ''
}

Button.propTypes = {
    clase: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
}

export default Button;