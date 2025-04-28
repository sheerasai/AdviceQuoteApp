
import { useState } from 'react'
import './App.css'
import Quotes from './Quotes'
import axios from 'axios';
function App() {
const [Quote,SetQuote] = useState("No Quotes yet");

const getQuote = () =>{
axios.get("https://api.adviceslip.com/advice").then(response=>{
  SetQuote(response.data.slip.advice);
}) .catch(error => {
  console.error('Error fetching data:', error);
});
}
  return (
    <>
     <Quotes getQuote={getQuote} Quote={Quote} SetQuote={SetQuote}/>
    </>
  )
}

export default App
