import React from 'react';
import Lap from './Lap';



class Stopwatch extends React.Component {
	constructor() {
		super();

		this.onStart = this.onStart.bind(this);
		this.onStop = this.onStop.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onLap = this.onLap.bind(this);

		this.state = {
			milli: 0,
			laps: []
		}
	}

	getMinutes() {
		return ('0' + Math.floor(this.state.milli / 6000)).slice(-2);
	}

	getSeconds() {
		return ('0' + (Math.floor(this.state.milli / 100) % 60)).slice(-2);
	}

	getMilli() {
		return ('0' + this.state.milli % 100).slice(-2);
	}

	getCurrentTime() {
		return this.getMinutes() + ' : ' + this.getSeconds() + ' : ' + this.getMilli();
	}



	onStart() {
		this.timer = setInterval(() => {
			this.setState({
				milli: this.state.milli + 1
			})
		}, 10);
	}

	onStop() {
		clearInterval(this.timer);
	}

	onReset() {
		this.setState({
			milli: 0,
			laps: []
		})
	}

	onLap() {
		let currentTime = this.getCurrentTime();

		this.setState({ 
		    laps: this.state.laps.concat([currentTime])
		})
	}

	

	render() { 		
		const laps = this.state.laps;

		return(
			<div className="wrapper">
				<div className="timer-container">
					<h1 className="timer">{this.getCurrentTime()}</h1>
				</div>

				<div className="timer-controls-contrainer">
					<button onClick={this.onStart}>Start</button>
					<button onClick={this.onStop}>Stop</button>
					<button onClick={this.onLap}>Lap</button>
					<button onClick={this.onReset}>Reset</button>
				</div>

				<ul className="laps">
					{
						laps.map((lap, index) => <Lap key={index} details={lap} />)
					}
				</ul>
			</div>
		)
	}
}



export default Stopwatch;