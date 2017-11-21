import { connect } from "react-redux";
import * as SessionActions from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ session, errors }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(SessionActions.logout),
  processForm: (formData) => {
    if (ownProps.location.pathname === "/login") {
      return dispatch(SessionActions.login(formData));
    } else if (ownProps.location.pathname === "/signup") {
      return dispatch(SessionActions.signup(formData));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
