import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import Button from './components/Button';
import TodoItem from './components/TodoItem';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 0,
          value: 'hiiii',
        },
        {
          id: 1,
          value: 'hehhehe',
        }
      ],
      inputValue: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onSubmit = () => {
    if(this.state.inputValue){
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: this.state.todos.length + 1,
            value: this.state.inputValue,
          }
        ],
        inputValue:""
      })
    }
  }

  removeItem=(e)=>{
    e.target.parentElement.remove()
}

  done = (e) =>{
    e.target.parentElement.firstChild.style.textDecoration = 'line-through'
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {
            this.state.todos.map((item) => (
              <TodoItem key={item.id} value={item.value} 
              remove = {this.removeItem}
              done = {this.done}
              />
            ))
          }
        </div>
        <div>
          <Input handleChange={this.handleChange} value={this.state.inputValue} />
          <Button value="Submit" onClick={this.onSubmit} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
