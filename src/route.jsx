import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Articles from './componants/Articles';
import ControlDashBoard from './componants/ControlDashBoard';

const Routing = () => (
	<Switch>
		<Route exact path="/" component={ControlDashBoard} />
		{/* <Route path="/users/:userId/articles" key="id" component={Articles} /> */}
	</Switch>
);

export default Routing;
