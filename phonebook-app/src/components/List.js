import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render() {
        return (
            <div className={"ListArea"}>
                <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}></input>
                <ul className={"List"}>
                    <li>
                        <span className={"name"}>Mahmut Hayırlı</span>
                        <span className={"phone"}>2485885</span>
                        <span className={"clearfix"}></span>
                    </li>
                    <li>
                        <span className={"name"}>Yusuf Hayırlı</span>
                        <span className={"phone"}>2545363</span>
                        <span className={"clearfix"}></span>
                    </li>
                    <li>
                        <span className={"name"}>Osman Kedi</span>
                        <span className={"phone"}>2352646</span>
                        <span className={"clearfix"}></span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default List;