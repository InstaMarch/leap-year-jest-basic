const CHANGE_YEAR = "CHANGE_YEAR";

module.exports.changeYear = function (year) {
    return {
        year,
        type: CHANGE_YEAR
    };

};
