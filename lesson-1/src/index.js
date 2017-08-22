import React from 'react';

import ReactDOM from 'react-dom';
import './random';

const mountNode = document.querySelector('.app');


const users = [
    {
        id: 1,
        fullName: 'Иванов Иван',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        birthdate: '1976-10-10',
        gender: 'мужской',
        address: 'ул. Звенигороская, 47б',
        email: 'ivanov@mail.ru'
    },
    {
        id: 2,
        fullName: 'Петров Петр',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
        birthdate: '1957-01-14',
        gender: 'мужской',
        address: 'ул.Пушкиская, 13',
        email: 'ivanov@mail.ru'
    },
    {
        id: 3,
        fullName: 'Натальина Наталья',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
        birthdate: '1990-07-03',
        gender: 'женский',
        address: 'ул. Лермонтова, 59',
        email: 'ivanov@mail.ru'
    }
];
var cloneData = function() {
  console.log(users);

    let  cloneUsers = [];
    
    cloneUsers = users.concat(users);
    console.log(users);
    return List(cloneUsers);
}
const List = ({ arr }) => {

    return (
        <div>
            {arr.map(items => {
          return (
              <div className="panel panel-info" key={items.id}>
                  <div className="panel-heading">
                      <h3 className="panel-title">{items.fullName}</h3>
                  </div>
                  <div className="panel-body">
                      <div className="row">
                          <div>
                              <div className="col-md-3 col-lg-3 " style={{textAlign: "center"}}>
                                  <img src="" className="pull-left" />
                              </div>
                              <div className=" col-md-9 col-lg-9">
                                  <table className="table table-user-information">
                                      <tbody>
                                          <tr>
                                              <td>Дата рождения</td>
                                              <td>{items.birthdate}</td>
                                          </tr>
                                          <tr>
                                              <td>Пол</td>
                                              <td>{items.gender}</td>
                                          </tr>
                                          <tr>
                                              <td>Адрес</td>
                                              <td>{items.address}</td>
                                          </tr>
                                          <tr>
                                              <td>Email</td>
                                              <td>
                                                  <a href>{items.email}</a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
          )
        })};
            <button className="primary" onClick={cloneData}>CLICK ME</button>
        </div>
    );
}

ReactDOM.render(<List arr={users} />, mountNode);