/**
 * WORKSHOP
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 *
 *    minst 8 tecken varav minst ett specialtecken enligt nedan ✅
 *    eller har minst 12 tecken och minst en siffra ✅
 *    eller har minst 16 tecken ✅
 *
 * Specialtecken: @, $, %, *, ^, <, >, ?, !, (, ), [, ], {, }, '
 */

const has_special_char = function(str) {
	const SPECIAL_CHARS = [
		"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
	];

	for (let i = 0; i < SPECIAL_CHARS.length; i++) {
		if (str.includes(SPECIAL_CHARS[i])) {
			return true;
		}
	}
	return false;
};

const has_number = function(str) {
	const NUMBERS = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	];

	for (let i = 0; i < NUMBERS.length; i++) {
		if (str.includes(NUMBERS[i])) {
			return true;
		}
	}
	return false;
};

let passwords = [
	"password", // inte giltigt
	"passw?rd", // giltigt
	"pa$$word", // giltigt
	"secretpassword", // inte giltigt
	"secr3tpassword", // giltigt
	"such-password-much-secure-very-long", // giltigt
];

passwords.forEach(function(password) {
	// check if `password` matches criteria
	if (password.length >= 8 && has_special_char(password)) {
		console.log(`Password '${password}' is at least 8 chars and has at least one special char`);

	} else if (password.length >= 12 && has_number(password)) {
		console.log(`Password '${password}' is at least 12 chars and has at least one numeric char`);

	} else if (password.length >= 16) {
		console.log(`Password '${password}' is at least 16 chars`);

	} else {
		console.log(`Password '${password}' is not secure enough, my grandma can crack it!`);
	}
});
