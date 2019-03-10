import { addPermission, editPermission, getRole } from '../Services';
import { toast } from 'react-toastify';
let condition;

const an = function(role) {
	let selectObj = {
		role,
		method: null,
		table: null,
		can(method) {
			this.method = method;
			return this;
		},
		to(table) {
			this.table = table;
			addData({ ...this });
			return this;
		},
		when(whencondition) {
			condition = whencondition;
			return this;
		}
	};
	selectObj.from = selectObj.to;
	return selectObj;
};

async function addData({ role, method, table }) {
	//To add Data with API call and then adding the condition if exist to the same record in the DB.
	try {
		let roleObj = await getRole(role);
		let permission = roleObj
			? await addPermission({ role, method, table, roleId: roleObj.id })
			: toast.error('something went wrong');
		if (condition && permission) {
			await editPermission({ id: permission.id, condition });
		}
	} catch (error) {
		throw new error('some thing went wrong ');
	}
}

export { an as a, an };
