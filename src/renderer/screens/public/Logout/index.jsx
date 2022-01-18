import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as usersActions } from '../../../ducks/reducers/users';

const Logout = ({ loginRestart }) => {
  useEffect(() => {
    document.body.classList.remove('theme--dark');
    document.body.classList.add('theme--default');
    loginRestart();
  });

  return null;
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...usersActions.loginActions,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Logout);
