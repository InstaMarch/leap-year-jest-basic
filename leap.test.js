const {store} = require("./leap");
const {changeYear} = require("./actions");

test("a year that is not a leap year", function () {
    store.dispatch(changeYear(2015));
    expect(store.getState().isLeap).toBe(false);
});

test("a year that is a leap year", function () {
    store.dispatch(changeYear(2016));
    expect(store.getState().isLeap).toBe(true);
});

test("another year that is not a leap year", function () {
    store.dispatch(changeYear(2011));
    expect(store.getState().isLeap).toBe(false);
});

test("every one hundred years a leap year is dropped", function () {
    store.dispatch(changeYear(1900));
    expect(store.getState().isLeap).toBe(false);
});
