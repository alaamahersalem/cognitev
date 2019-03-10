import { addRole } from '../Services';

async function createRole(role) {
	await addRole(role);
}

export default createRole;
