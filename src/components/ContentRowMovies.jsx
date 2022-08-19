import '../assets/css/app.css';
import ColumnContentRowMovies from './ColumnContentRowMovies';
import { useState, useEffect } from 'react';
import api from '../services/api';


export default function ContentRowMovies() {
	
	const cardsDefault = [
		{	title:"Movies in Data Base", value:"0",	color:"primary", icon:"fa-film"},
		{	title:"Total Awards",	value:"0", color:"success",	icon:"fa-award"},
		{	title:"Actors Quantity",	value:"0",	color:"warning",	icon:"fa-user"}
	];

	const [cards, setCards] = useState(cardsDefault);
	
	async function fetchNumbers(){
		const response = await api.get('/api/dashboard');
		setCards([
			{	title:"Movies in Data Base", value: response.data.countMovies,	color:"primary", icon:"fa-film"},
			{	title:"Total Awards",	value: response.data.countAwards, color:"success",	icon:"fa-award"},
			{	title:"Actors Quantity",	value: response.data.countActors,	color:"warning",	icon:"fa-user"}
		]);
	}
	
	useEffect(() => {fetchNumbers()} , []);

  return(
    <>
    			<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					<div className="row">

						{
							cards.map((card, index) => (
							<ColumnContentRowMovies key={index} title={card.title} color={card.color} value={card.value} icon={card.icon} />
							))
						}
												
					</div>
    </>
  )
}