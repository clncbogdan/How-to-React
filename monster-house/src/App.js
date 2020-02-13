import React from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(monsters => this.setState({ monsters: monsters }));
	}

	render() {
		return (
			<div className="App">
				<CardList>
					{this.state.monsters.map(monster => (
						<h2 key={monster.id}>{monster.name}</h2>
					))}
				</CardList>
			</div>
		);
	}
}

export default App;
