import React, {Component} from 'react'

class NamesList extends Component {
    render(){
        const {data} = this.props;
        //console.log('we should see the data here',data)
        const namesList = data.map(name => {
        return(
            <li key={name.id} className={name.sex}>{name.name}</li>
            )
    })
    return ( 
      <ui>
        {namesList}
      </ui>
        );
    }
}

export default NamesList;