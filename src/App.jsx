import { useState } from 'react'
import './App.css'
import CardList from './CardList'


function App() {
const persons = [{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/men/88.jpg',
  "profession": "Software Engineer",
  "shows": true,
  "id":1
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc":'https://randomuser.me/api/portraits/women/64.jpg',
  "profession": "Software Engineer",
  "shows": true,
  "id":2
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/women/90.jpg',
  "profession": "Software Engineer",
  "shows": false,
  "id":3
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/women/54.jpg',
  "profession": "Software Engineer",
  "shows": true,
  "id":4
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/men/75.jpg',
  "profession": "Software Engineer",
  "shows": false,
  "id":5
},]
  return (
    <>
      <CardList data={persons} />
    </>
  )
}

export default App
