// import PropTypes from 'prop-types';

export default function TabPane(props) {

    return (
        <div className='tab-pane'>
            {props.children}
        </div>
    )
}

// TabPane.propTypes = {
//     name: PropTypes.string
// }