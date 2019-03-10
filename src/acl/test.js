let permissions = {
	admin: [
		{
			can: 'get',
			to: '/users',
			when: null
		},
		{
			can: 'put',
			to: '/users/:userId',
			when: '(params, user) => { params.userId == user.id }'
		}
	]
};
//localhost:4000/roles/1/permissions
http: // const an = function(r) {
// 	role = r;
// 	return can;
// };
// var can = {
// 	can: (m) => {
// 		method = m;
// 		return from;
// 	}
// };
// var from = {
// 	from: (x) => {
// 		table = x;
// 		addData({ role, method, table });
// 		return when;
// 	}
// };

// var when = {
// 	when: async (condition) => {
// 		con = condition;
// 		return;
// 	}
// };

let check = {
	role: false,
	method: false,
	to: false,
	when: false,
	result: false,

	if: (role) => {
		role = permissions[role];
		if (role != undefined) {
			this.role = true;
		}
		this.checkResult();
		return this.result;
	},

	can: (method) => {
		if (this.permission == undefined) {
			throw 'please load a role first';
		}
		let perm = this.permission.filter((obj) => obj.can === method);
		if (perm.lenght > 0) {
			if (perm[0].when == null) {
				this.when = true;
			}
			this.method = true;
		}
		this.checkResult();
		return this.result;
	},

	checkResult: () => {
		this.result = this.role && this.method && this.to && this.when;
	}
};
// return this.result ?
// var result = await getPermission({ role, method, table, condition });
// if (condition && router) {
// 	var h = result.filter((x) => x.table === router.path).map((permission) => {
// 		var foo = new Function('return (' + permission.where + ')')();
// 		return foo(condition, table);
// 	});
// 	return h[0];
// } else {
// 	return result.filter((x) => x.table === table).length > 0 ? true : false;
// }
