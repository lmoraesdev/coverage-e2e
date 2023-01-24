const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");

describe("API Suite test", () => {
	describe("/contact", () => {
		it("should request contact page and return HTTP Status 200", async () => {
			const response = await request(app)
				.get("/contact")
				.expect(200);
			assert.strictEqual(response.text, "contact us page");
		});
	});

	describe("/hello", () => {
		it("should request a no existent route /hi and redirect to /hello", async () => {
			const response = await request(app)
				.get("/")
				.expect(200);
			assert.strictEqual(response.text, "Hello World!");
		});
	});
});
