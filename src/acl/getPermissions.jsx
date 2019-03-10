import { getData } from './helpers';

const check = {
	method: null,
	role: null,
	table: null,
	router: null,
	condition: null,
	if: function(role) {
		this.role = role;
		return check;
	},
	can: function(method) {
		this.method = method;
		return check;
	},
	to: function(table) {
		this.table = table;
		return check;
	},
	when: function(condition) {
		this.condition = condition;
		return getData(this);
	}
};

export default check;
