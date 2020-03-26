const request = require("supertest");

const server = require("../api/server.js");

describe("userRoutes.js", function() {
  describe("GET /api/users", function() {
    it("should return 200 OK", async function() {
      const response = await request(server).get("/api/users");

      expect(response.status).toBe(200);
    });

    it("should return JSON", async function() {
      const res = await request(server).get("/api/users");

      expect(res.type).toMatch(/json/i);
    });

    it("should respond with empty array", async function() {
      const res = await request(server).get("/api/users");
      expect(res.body).toHaveLength(3);
    });

    it("should respond with array", async function() {
      const res = await request(server).get("/api/users");

      expect(res.body).toBeInstanceOf(Array);
    });
  });

  describe("GET BY ID /api/users/:id", function() {
    it("should return something OK", async function() {
      const res = await request(server).get("/api/users/2");

      expect(res.status).toBe(200);
    });

    it("should return JSON", async function() {
      const res = await request(server).get("/api/users/2");

      expect(res.type).toMatch(/json/i);
    });
  });

  describe("DELETE /api/users/:id", function() {
    it("should return 404 NOT OK", async function() {
      const res = await request(server).delete("/api/users/0");

      expect(res.status).toBe(404);
    });

    it("should return 204 OK", async function() {
      const res = await request(server).delete("/api/users/1");

      expect(res.status).toBe(204);
    });
  });
});
