import React from 'react';
import './App.css'
import Todos from './Todos';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      items:[
        { text: "Learn Javascript", key:1},
        {text: "Learn React", key:2},
        {text: "Learn CSS", key:3}
      ],
      currentItems:{
        text:"",key:""
      }
    }
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleInput = (e) => {
    this.setState({
      currentItems:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault();
    //console.log(this.state)
    this.setState({
      items: [...this.state.items,this.state.currentItems],
      currentItems:{
        text:"",key:""
      }
    })
  }
  deleteItem(key){
    const newitems = this.state.items.filter(item => item.key !== key);
    //console.log(this.state)
    this.setState({
      items: newitems
    })
      
  }
  render() {
    return (
       <header>
          <form onSubmit={this.addItem} className="form">
          <input type="text" placeholder="Add Items..." onChange={this.handleInput} value={this.state.currentItems.text} />
          <button type="submit">Add</button>
          </form>
          <div className="list">
          <Todos items={this.state.items} deleteItem={this.deleteItem} />
          </div>
       </header>
    );
  }
}
export default App;
