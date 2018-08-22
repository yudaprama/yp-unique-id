export default (len=64) =>  {
	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let result = '';
	while (len--) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	};
	return result;
}
