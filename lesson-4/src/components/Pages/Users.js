import React, { Component } from 'react';


class Users extends Component {

static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login')
    if (login !== 'admin') {
      replace('/')
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Раздел users</div>
      </div>
    )
  }
}


export default Users;
