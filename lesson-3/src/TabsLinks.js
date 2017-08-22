import React, { Component } from 'react';



class TabsLinks extends Component {

  render() {
    const {data, action } = this.props;
  	return (

      <ul>
        {this.props.data.map( (item, index) => {
          return (
            <li key={index} onClick={action}>
              {item.id}
            </li>
          )
        })
        }
      </ul>
      )
}

}
  

export default TabsLinks;
