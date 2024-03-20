import '../stylesheets/Screen.css';
import PropTypes from 'prop-types'

const  Screen = ({ input }) => (
    <div className={`screen`}>
        { input }
    </div>
);

Screen.defaultProps = {
    input: 0,
}

Screen.propTypes = {
    input: PropTypes.string.isRequired,
}

export default Screen;

