import { useState } from 'react'
import './App.css'
import Card from './Card'


function App() {
const persons = [{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/men/88.jpg',
  "profession": "Software Engineer",
  "shows": true
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc":'https://randomuser.me/api/portraits/women/64.jpg',
  "profession": "Software Engineer",
  "shows": true
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/women/90.jpg',
  "profession": "Software Engineer",
  "shows": false
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/women/54.jpg',
  "profession": "Software Engineer",
  "shows": true
},
{
  "fullName": "John Doe",
  "bio": "A software engineer with a passion for technology.",
  "imgSrc": 'https://randomuser.me/api/portraits/men/75.jpg',
  "profession": "Software Engineer",
  "shows": false
},]
  return (
    <>
        <Card fullName={persons[0].fullName}  bio={persons[0].bio} profession={persons[0].profession} imgSrc={persons[0].imgSrc}></Card>
        <Card fullName={persons[1].fullName}  bio={persons[1].bio} profession={persons[1].profession} imgSrc={persons[1].imgSrc}></Card>
        <Card fullName={persons[2].fullName}  bio={persons[2].bio} profession={persons[2].profession} imgSrc={persons[2].imgSrc}></Card>
        <Card fullName={persons[3].fullName}  bio={persons[3].bio} profession={persons[3].profession} imgSrc={persons[3].imgSrc}></Card>
        <Card fullName={persons[4].fullName}  bio={persons[4].bio} profession={persons[4].profession} imgSrc={persons[4].imgSrc}></Card>

    </>
  )
}

export default App
