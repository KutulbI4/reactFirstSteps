import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import server from '../../redux/server';


class UsersContainer extends React.Component {

  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(respons => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(respons.data.items);
        this.props.setUsersTotalCount(respons.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(respons => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(respons.data.items);
      });

  }

  render() {
    return <>

      {this.props.isFetching ?
        <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching
})(UsersContainer);