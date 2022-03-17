
const regexFormats = [
	/^[1]{0,1}\s?[0-9]{3}\-[0-9]{3}\-[0-9]{4}?$/,
	/^[1]{0,1}\s?\([0-9]{3}\)[0-9]{3}\-[0-9]{4}?$/,
	/^[1]{0,1}\s?\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}?$/,
	/^[1]{0,1}\s?[0-9]{3}\s[0-9]{3}\s[0-9]{4}?$/,
	/^[1]{0,1}\s?[0-9]{10}?$/,
]

function telephoneCheck(str) {
	  return regexFormats.map(format => format.test(str)).some(Boolean)
}

console.log(telephoneCheck("555 555 5555"));