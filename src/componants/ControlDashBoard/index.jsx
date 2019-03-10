import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import CreateRole from '../CreateRole';
import CreatePermission from '../CreatePermission';
import CheckPermission from '../CheckPermission';
import { getRoles } from '../../Services';
import 'react-web-tabs/dist/react-web-tabs.css';
import './styles.scss';
import { check, a } from '../../acl';
class ControlDashBoard extends Component {
	state = {
		roles: []
	};
	async componentDidMount() {
		// a('user').can('post').to('/users/:userId/articles').when((params, user) => user.id === params.userId);
		// var result = await check.if('user').can('post').to('/users/10/articles').when({ id: '10' });
		// debugger;
		var roles = await getRoles();
		this.setState({ roles });
	}
	addRole(role) {
		this.setState({ roles: [ ...this.state.roles, role ] });
	}
	render() {
		return (
			<Tabs className="tabsContainer" defaultTab="vertical-tab-one" vertical>
				<TabList>
					<Tab tabFor="vertical-tab-one">Create Role</Tab>
					<Tab tabFor="vertical-tab-two">Create Permission</Tab>
					<Tab tabFor="vertical-tab-three">Check Role</Tab>
				</TabList>
				<TabPanel tabId="vertical-tab-one">
					<CreateRole addRole={(role) => this.addRole(role)} />
				</TabPanel>
				<TabPanel tabId="vertical-tab-two">
					<CreatePermission roles={this.state.roles} />
				</TabPanel>
				<TabPanel tabId="vertical-tab-three">
					<CheckPermission roles={this.state.roles} />
				</TabPanel>
			</Tabs>
		);
	}
}

export default ControlDashBoard;
