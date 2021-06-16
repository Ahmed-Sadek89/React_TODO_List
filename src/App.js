import React , { Component } from 'react';
import './App.css';
import ListItem from './Component/ListItem/ListItem';
import AddItem from './Component/AddItem/AddItem';
class App extends Component{
  state = {
    items : [
      { id : 1 ,name : 'ahmed' ,age : 22 },
      { id : 2 ,name : 'amr' ,age : 21 },
      { id : 3 ,name : 'aya' ,age : 12 },
    ]
  }

  myDelete = (id) =>{
    // let item = this.state.items;
    // let i = item.findIndex( (x) => x.id !== id );
    // item.splice(i,1);
    // this.setState({items:item})  OR

    let item = this.state.items.filter((items)=> {
      return items.id !==id 
    } )
    this.setState({items:item});
    
  }

  AddItem =(item)=>{
    
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({
      item:item
    })

  }
    render () {
      return (
        <div className='main'>
            <h1 className='header'>TODO list</h1>
            <div className='App'>
              <ListItem data={this.state.items} deleteItem={this.myDelete} />
              <AddItem AddItem={this.AddItem}/>
            </div>
        </div>
      );
    }
}
export default App;
