import "./GuessGameStyle.css";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { useState } from "react";


function MyGame(){
	const [num, setNum] = useState();
	const [guessNum, setGuess] = useState('');
	var g = [];
	const [guesses, guessArray] = useState(g);
	const [getMin, setMin] = useState(1);
	const [getMax, setMax] = useState(100);
	const [myGuessLimit, setGuessLimit] = useState(5);
	var winArray = [];
	const [myWins, setWins] = useState(winArray);
	
function RandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getRandoNum = () =>{
	setNum(RandomNum(getMin, getMax));
}

console.log(num);
	
//GAME ROUTE
function GuessGame()
{	

var guessesLeft = myGuessLimit - (guesses.length);
if (guesses.length == myGuessLimit)
{
	return (
    <>
		<h1> Game Over! </h1>
	</>
	);
}
	
function handleNewGuess(e)
{
e.preventDefault();
guessArray((ga)=>[...ga,guessNum]);
setGuess('');
CompareNums();
}

	
function CompareNums(){
	if (guessNum > num)
	{
		alert("Your guess is too high");
	}
	else if (guessNum < num)
	{
		alert("Your guess is too low");
	}
	else if (guessNum == num)
	{
		alert("You won!");
		setWins((w)=>[...w, myWins]);
		getRandoNum();
	}
	else
	{
		alert("Not a valid guess");
	}
}
	
return (
<>
<h1>Guessing Game</h1>
<form>
<button onClick={getRandoNum}>Get Winning Number</button>
<br /><br />
Pick a number between {getMin}-{getMax}:
<input type='text' name='newGuess' value={guessNum} onChange={(e) =>
setGuess(e.target.value)}/><br /><br />
<button onClick={(e)=>handleNewGuess(e)}>Guess</button>
</form>

<hr />
	<h3>You have {guessesLeft} guesses left </h3>
<ul className='guessing-list'>

</ul>
</>
);
}


//SETTINGS ROUTE
function SettingForm()
{
 	var n = "";
	var maxGuess = [5, 10, 15, 20];
	
	function GuessLimit()
	{
		for (n = 0; n < maxGuess.length; n++){
			return maxGuess[n];
		};
	};
	
	function handleGuessLimit(guessLimitEvent)
	{
		guessLimitEvent.preventDefault();
		setGuessLimit(guessLimitEvent.target.value);	
	}
	
	function handleSubmissions(e)
	{
	e.preventDefault();
	}

    return (
    <>
		<h1>Settings</h1>
		
		<form>
		Choose number of guesses:
		<select value={myGuessLimit} onChange={handleGuessLimit}>
			<option value = {maxGuess[0]}>{maxGuess[0]}</option>
			<option value = {maxGuess[1]}>{maxGuess[1]}</option>
			<option value = {maxGuess[2]}>{maxGuess[2]}</option>
			<option value = {maxGuess[3]}>{maxGuess[3]}</option>
		</select>
		<br />
		Pick a number from 1-100:
		<br />
		Min: 
<input type="text" name="minNum" value={getMin} 
		onChange={(e) => setMin(e.target.value)}/>

	<br />
		Max: 
<input type="text" name="maxNum" value={getMax} 
onChange={(e) => setMax(e.target.value)}/>
		<br />
<button onClick={(e)=>handleSubmissions(e)}>Submit</button>
		</form>

		<br />
	<h4>The min is {getMin}</h4>
<h4>The max is {getMax}</h4>
<h4>The guess limit is {myGuessLimit}</h4>
</>
);
}

//STATISTIC ROUTE
function SatForm()
{

var average = (((myWins.length) / (guesses.length))*100);
console.log((myWins.length),(guesses.length));

return (
    <>
		<h1>Statistics</h1>
		<h4>You guessed {myWins.length} correctly.</h4>
<h4>Your average number of guesses is {average}% </h4>
	</>
);
}

function MyRoutes()
{
	return (
		<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="/stats" element={<Statistics />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</div>
	)
}

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/settings">Settings</Link></li>
		<li><Link to="/stats">Statistics</Link></li>
		</ul>
	);
}

function Header()
{
	return (
	<div className='header'>
	<Nav />
	</div>
	)
}

function Home()
{
	return (
		<div className='page'>
		<Header />
		<GuessGame />
		</div>
	)
}

function Settings()
{
	return (
		<div className='page'>
		<Header />
		<SettingForm />
		</div>
	)
}

function Statistics()
{
	return (
		<div className='page'>
		<Header/>
		<SatForm />
		</div>
	)
}

function NotFound()
{
	return (
		<div className='page'>
		<Header />
		<h1>Page not found...</h1>
		</div>
	)
}

return (
<>	
	<MyRoutes />

</>
);
}

export function GuessApp()
{
return <MyGame />;

}

export default GuessApp;
