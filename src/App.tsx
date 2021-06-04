import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Elon Musk",
      age: 40,
      img: "https://picsum.photos/200/300",
      note: "Tesla and Spacex",
    },
    {
      name: "Angelina",
      age: 42,
      img: "https://picsum.photos/200/300",
      note: "Singer"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to the party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
