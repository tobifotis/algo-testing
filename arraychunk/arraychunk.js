const chunk = (array, size) => {
    const chunked = [];

    for (let element of array) {
        const lastEl = chunked[chunked.length - 1];

        if (!lastEl || lastEl.length === size) {
            chunked.push([element]);
        } else {
            lastEl.push(element);
        }
    }

    return chunked;
};

module.exports = chunk;
