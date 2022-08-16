import '../assets/css/app.css';
import ColumnContentRowMovies from './ColumnContentRowMovies';

const cards = [
	{
	title:"Movies in Data Base",
	value:"21",
	color:"primary",
	icon:"fa-film"
},
	{
		title:"Total Awards",
	value:"79",
	color:"success",
	icon:"fa-award"
},
	{
	title:"Actors Quantity",
	value:"49",
	color:"warning",
	icon:"fa-user"
}
];

export default function ContentRowMovies(props) {
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