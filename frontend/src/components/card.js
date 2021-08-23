import { Component } from 'react';

class Card extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		fetch('http://localhost:8080/films')
			.then((res) => {
				return res.json();
			})
			.then((resData) => {
				this.setState({ data: resData.films });
			})
			.catch((err) => console.error(err));
	}

	render() {
		// console.log(cards.release_date)
		// const imageUrl="https://i.pinimg.com/originals/77/7d/39/777d396a22558112ca6ab9fef4815c77.jpg"
		console.log(this.state.data);
		const cards = this.state.data;
		const abc = cards.map(
			({ title, director, producer, release_date, imageUrl }, index) => {
				return (
					<div key={index} className="card">
						<div>
							<img src={imageUrl} alt="abc" className="image-poster"></img>
						</div>
						<div className="card-body">
							<div className="title">
								<div className="movie-name">{title}</div>
								<div className="director">--{director}</div>
							</div>
							<div className="title">
								<div>{producer}</div>
								<div>{release_date}</div>
							</div>
							<button className="get-tickets-btn">GET TICKETS</button>
						</div>
					</div>
				);
			}
		);
		return (
			<div
				style={{
					background: 'black',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			>
				<div id="card-container">{abc}</div>
			</div>
		);
	}
}

export default Card;
