import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, setToggleFetchingAC } from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "./../../components/common/Preloader/Preloader";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https:/social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(Response.data.items);
                this.props.setTotalUsersCount(Response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https:/social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(Response.data.items);
            });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollowed={this.props.unfollowed}
        followed={this.props.followed} /> </>;
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowed: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setToggleFetchingAC(isFetching))
        },
    }
    
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersAPI);