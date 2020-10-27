exports.getDate = function () {

    const today = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    return today.toLocaleDateString("hi-IN", options);
}

exports.getDay = function () {

    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("hi-IN", options);
}
