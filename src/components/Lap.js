import React from 'react';

class Lap extends React.Component {
	render() { 
		const { details } = this.props;

		return(
			<li>{details}</li>
		)
	}
}



export default Lap;