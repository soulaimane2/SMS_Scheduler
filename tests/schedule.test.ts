import api from "supertest"
import app from "../app"
import { faker } from "@faker-js/faker";
import { connectDb } from "../utils/db.util";
import mongoose from "mongoose";

jest.useRealTimers();

describe("testing schedules routes", () => {
    beforeAll(async () => {
        await connectDb();
    });
    beforeEach(() => {
        jest.setTimeout(10 * 30000);
    })
    afterAll(async () => {
        await mongoose.disconnect();
    });

    test("add schedule", async () => {
        const shedule = await api(app)
        .post("/schedules/add")
        .send({
            reciepients: Array.from({length: faker.datatype.number(10)}).map(e => faker.phone.number('+############')),
            message: faker.datatype.string(150), 
            time: faker.date.future()
        }).expect(201)

        expect(shedule.body.error).toBe(false)
        
    })
    test("add schedule and run right now", async () => {
        const shedule = await api(app)
        .post("/schedules/add")
        .send({
            reciepients: Array.from({length: faker.datatype.number(10)}).map(e => faker.phone.number('+############')),
            message: faker.datatype.string(150), 
            time: faker.date.future(),
            runNow: true
        }).expect(200)
        
        expect(shedule.body.error).toBe(false)
        
    })

    test("add schedule with one missing field", async () => {
        const shedule = await api(app)
        .post("/schedules/add")
        .send({
            reciepients: Array.from({length: faker.datatype.number(10)}).map(e => faker.phone.number('+############')),
            time: faker.date.future(),
        }).expect(400)

        expect(shedule.body.error).toBe(true)
        
    })

    test("getting schedules" , async () => {
        await api(app).get("/schedules").expect(200)
    })

    test("getting schedule with date range and pagination", async () => {
        const request = await api(app).get("/schedules?from=202210210210&to=202210210300&page=2").expect(200)

        expect(request.body.error).toBe(false)
    })
})


