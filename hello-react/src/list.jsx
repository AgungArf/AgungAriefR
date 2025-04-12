import React, {Component} from 'react';

import Image from './image'

class List extends Component {
    render(){
        return(
            <div>
                <ol>
                    <li><Image/></li>
                    <li><Image/></li>
                    <li><Image/></li>
                </ol>
            </div>
        )
           
    }
}
export default List;