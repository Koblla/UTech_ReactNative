import {connect} from 'react-redux'
import Footer from './../components/conversation/footer'

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToProps)(Footer)