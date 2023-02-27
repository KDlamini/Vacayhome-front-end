const shortenDescription = (description) => (description.length > 252 ? description.substring(0, 253).concat('...') : description);

export default shortenDescription;
