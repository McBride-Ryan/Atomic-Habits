import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title , onAdd, showAdd}) => {
    return (
        <header className="header">
            {/* Created a Props Default */}
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Your Atomic Habits',
}

Header.proTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
