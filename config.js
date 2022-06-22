/*eslint linebreak-style: ["error", "windows"]*/
exports.port = process.argv[2] || process.env.PORT || 8080;
exports.dbUrl = process.env.DB_URL || 'mongodb+srv://lylyzyta:hnmixmZYgLes@cluster0.0rzuj.mongodb.net/BurgerLab';
exports.secret = process.env.JWT_SECRET || 'letstodiscoverDavid';
exports.adminEmail = process.env.ADMIN_EMAIL || 'lylyzyta@admin';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'hnmixmZYgLes';
