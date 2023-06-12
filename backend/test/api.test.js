import supertest from "supertest";
import chai from "chai";
import sinonChai from "sinon-chai";
import { app } from "../app.js";

chai.use(sinonChai);
const { expect } = chai;
const server = supertest.agent(app);
const credentials = {
  username: "Peter Lam",
  password: "1234",
};
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlBldGVyIExhbSJ9.jtzHvG0iii6loHEWXPM2w0BOHTCLf_obilZU8n70zTs";

describe("/POST api/v1/auth/signIn", () => {
  it("should return status code 200", (done) => {
    server
      .post("/api/v1/auth/signIn")
      .send(credentials)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

describe("/GET api/v1/buildings/eui", () => {
    it("should return status code 200", (done) => {
      server
        .get("/api/v1/buildings/eui")
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it("should return payload correctly", (done) => {
        server
          .get("/api/v1/buildings/eui")
          .set("Authorization", `Bearer ${token}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body.data.length).to.equal(7);
            done();
          });
      });
  });

  describe("/GET api/v1/buildings/details", () => {
    it("should return status code 200", (done) => {
      server
        .get("/api/v1/buildings/details")
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it("should return payload correctly", (done) => {
        server
          .get("/api/v1/buildings/details")
          .set("Authorization", `Bearer ${token}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body.data.length).to.equal(1000);
            done();
          });
      });
  });

