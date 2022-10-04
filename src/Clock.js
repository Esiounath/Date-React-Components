import React,{useState,useEffect} from 'react';
import './Clock.css';
const date = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day = ["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","Saturday","Sunday"];
export function Clock() {
    const [secondes, setSecondes] = useState(date.getSeconds());
    const [minutes,setMinutes] = useState(date.getMinutes());
    useEffect(() => {
        setTimeout(() => {
            if(secondes == 59){
            setSecondes((secondes) => secondes = 0 );
            setMinutes((minutes) => minutes + 1);
            }
            else{
                setSecondes((secondes) => secondes + 1 );
            }
        }, 1000);
      });
  return (
    <fieldset>
        Date
      <h2>{day[date.getDay()]} {date.getDate()} {month[date.getMonth()]} {date.getFullYear()} Time : {date.getHours()}:{minutes}:{secondes}</h2>
    </fieldset>
  );
  }
