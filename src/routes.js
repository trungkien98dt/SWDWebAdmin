import React from 'react';
import HomePage from './pages/homepage/HomePage';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import BookingListPage from './pages/bookingListPage/BookingListPage';
import BikeListPage from './pages/bikeListPage/BikeListPage';
import BranchListPage from './pages/branchListPage/BranchListPages';
import UserListPage from './pages/userListPage/UserListPage';
import BikeActionPage from './pages/bikeActionPage/BikeActionPage';
import BookingActionPage from './pages/bookingActionPage/BookingActionPage';
import BranchActionPage from './pages/branchActionPage/BranchActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },
    {
        path: '/booking-list',
        exact: true,
        main: () => <BookingListPage></BookingListPage>
    },
    {
        path: '/booking/:id/edit',
        exact: false,
        main: ({match, history}) => <BookingActionPage match={match} history={history}></BookingActionPage>
    },
    {
        path: '/bike-list',
        exact: true,
        main: () => <BikeListPage></BikeListPage>
    },
    {
        path: '/bike/add',
        exact: false,
        main: ({history}) => <BikeActionPage history={history}></BikeActionPage>
    },
    {
        path: '/bike/:id/edit',
        exact: false,
        main: ({match, history}) => <BikeActionPage match={match} history={history}></BikeActionPage>
    },
    {
        path: '/branch-list',
        exact: true,
        main: () => <BranchListPage></BranchListPage>
    },  
    {
        path: '/branch/add',
        exact: false,
        main: ({history}) => <BranchActionPage history={history}></BranchActionPage>
    },
    {
        path: '/branch/:id/edit',
        exact: false,
        main: ({match, history}) => <BranchActionPage match={match} history={history}></BranchActionPage>
    },  
    {
        path: '/user-list',
        exact: true,
        main: () => <UserListPage></UserListPage>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    }   
];

export default routes;