// Update with your config settings.

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: "127.0.0.1",
			database: "liquor",
			user: "user",
			password: "pass"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./data/migrations",
			tableName: "liquor"
		},
		seeds: {
			directory: "./data/seeds"
		}
	},

	testing: {
		client: "pg",
		connection: {
			host: "127.0.0.1",
			database: "test",
			user: "user",
			password: "pass"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./data/migrations",
			tableName: "test"
		},
		seeds: {
			directory: "./data/seeds"
		}
	},

	production: {
		client: "pg",
		connection: process.env.DATABASE_URL || {
			database: "liquor",
			user: "user",
			password: "pass"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./data/migrations",
			tableName: "liquor"
		},
		seeds: {
			directory: "./data/seeds"
		}
	}
};
