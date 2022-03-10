function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

//Define your application constants here
define('APPLICATION_PORT', process.env.PORT || 3000);

//Define custom constants here
define('DIFFICUILTY', { "easy":61, "medium": 52, "hard": 43, "very-hard": 34, "insane": 25, "inhuman": 17 });
define('DIFFICUILTY_LEVELS', ["easy", "medium", "hard", "very-hard", "insane", "inhuman"]);