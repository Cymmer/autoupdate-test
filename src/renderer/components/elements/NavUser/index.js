import cn from 'classnames';
import { getUser } from 'ducks';
import { useOnClickOutside } from 'hooks';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Icon from '../Icon';
import UserImage from '../UserImage';
import styles from './styles.module.scss';

const NavUser = ({ user, className }) => {
  const [isDropdownToggled, toggleDropdown] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => toggleDropdown(false));

  return (
    <div ref={ref} className={cn(styles.NavUser, className)}>
      <button
        className={styles.NavUser_button}
        data-test="dropdownButton"
        id="navUserButton"
        tabIndex={0}
        type="button"
        onClick={() => toggleDropdown(!isDropdownToggled)}
      >
        <UserImage className={styles.NavUser_image} image={user.profile_pic} />
        <span className={styles.NavUser_name}>{user.last_name}</span>
        <Icon className={styles.NavUser_caret} icon="keyboard_arrow_down" />
      </button>
      <Card
        className={cn({
          [styles.NavUser_dropdown]: !isDropdownToggled,
          [styles.NavUser_dropdown___toggled]: isDropdownToggled,
        })}
      >
        {/* Note: Temporarily hidden for Offline Version */}
        {/* <Link
          className={styles.NavUser_dropdown_link}
          id="myAccountButton"
          to="/student/account/personal-information"
          onClick={() => toggleDropdown(!isDropdownToggled)}
        >
          <Icon
            className={styles.NavUser_dropdown_link_icon}
            icon="account_circle"
          />
          My Account
        </Link> */}
        <Link
          className={styles.NavUser_dropdown_link}
          id="logoutButton"
          to="/logout"
        >
          <Icon
            className={styles.NavUser_dropdown_link_icon}
            icon="exit_to_app"
          />
          Logout
        </Link>
      </Card>
    </div>
  );
};

NavUser.defaultProps = {
  className: null,
};

NavUser.propTypes = {
  className: PropTypes.string,
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(NavUser);
