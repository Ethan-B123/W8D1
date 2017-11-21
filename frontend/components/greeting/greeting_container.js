import { connect } from "react-redux";
import * as SessionActions from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(SessionActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
