import React, { Component } from 'react';
import { DragonCard } from './DragonCard';
export class Home extends Component {
    render() {
        return (
            <div style={{float:'left',width:'100%', backgroundColor:'#00ffd8', textAlign:'center'}}>
                <h1>Home</h1>
                {this.props.dragons.map( dragon => (
                    <DragonCard {...dragon} selectDragon={this.props.selectDragon} />
                ))}
            </div>
        );
    }
}