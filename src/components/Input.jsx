import PropTypes from 'prop-types';

function Input({ clase, func, children, type, name }){

    return(
        <input className={ clase } name={name} type={ type } value={ children } onClick={ () => func(children) }/> 
    );
}



Input.propTypes = {
    clase: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Input;