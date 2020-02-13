import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [
				{
					id: '1',
					name: 'Frankenstein',
				},
				{
					id: '2',
					name: 'Dracula',
				},
				{
					id: '3',
					name: 'Zombie',
				},
			],
		};
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
