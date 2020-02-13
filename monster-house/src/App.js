import React from 'react';

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
				{this.state.monsters.map(monster => (
					<h2 key={monster.id}>{monster.name}</h2>
				))}
			</div>
		);
	}
}

export default App;
