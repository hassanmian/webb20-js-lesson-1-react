import React from 'react'
import Greeting from './components/Greeting';
import UserDataInfo from './components/UserDataInfo'

function App() {
  
  const greetingText = "Hej o hå!"

  const userData = {
    username: "hassanmian",
    firstName: "Hassan",
    lastName: "Mian",
    yearOfBirth: 1986,
    location: "Sweden"
  }

  const artists = [
    "Justin Bieber",
    "Bruno Mars",
    "Britney Spears",
    "Markoolio",
    "I Am Karate",
    "Star Horse"
  ]

  return (
    <div>
      <Greeting 
        greeting={greetingText} 
        firstName={userData.firstName}
        yearOfBirth={userData.yearOfBirth} 
      />
      <UserDataInfo userData={userData.username} />
      <UserDataInfo userData={userData.firstName} />
      <UserDataInfo userData={userData.lastName} />
      <UserDataInfo userData={userData.yearOfBirth} />
      <UserDataInfo userData={userData.location} />
      <h2>My Favorite Artists</h2>
      <ul>
        {artists.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

    </div>
  );
}

export default App;

/*
TitleCase, PascalCase
ButtonRed -> Första bokstaven i alla ord är i versal

camelCase
Första bokstaven i första ordet är en gemen, första bokstaven i
alla ord därefter är i versal
buttonRed

UPPERCASE
Allt är versaler och underscore istället för mellanslag
BUTTON_RED

snake_case
Gemener och underscore istället för mellanslag
button_red

kebab-case
Gemener och bindessträck istället för mellanslag
button-red

*/