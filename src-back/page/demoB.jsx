import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider, connect } from 'react-redux'
class BannerB extends React.Component {
    constructor(){
        super()
    }

    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>

            </div>
        )
    }
}
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}
const increaseAction = { type: 'increase' }
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BannerB)

