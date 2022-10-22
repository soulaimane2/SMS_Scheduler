import api from "supertest"
import app from "../app"
import { faker } from "@faker-js/faker";
import { connectDb } from "../utils/db.util";
import mongoose from "mongoose";

jest.useRealTimers();

let id = "6351ecab63e2e0c6c3a76994" //to be changed

describe("testing sms routes", () => {
    beforeAll(async () => {
        await connectDb();
    });
    beforeEach(() => {
        jest.setTimeout(10 * 30000);
    })
    afterAll(async () => {
        await mongoose.disconnect();
    });

    test("getting SMSs list with status", async () => {
        const request = await api(app).get(`/sms/${id}`).expect(200)

        expect(request.body.error).toBe(false)
    })

    test("getting SMSs filtred by date range", async () => {
        const request = await api(app).get(`/sms/${id}?from=196912120000&to197112120000`).expect(200)

        expect(request.body.error).toBe(false)
    })
    test("getting SMSs with all filters", async () => {
        const request = await api(app).get(`/sms/${id}?from=196912120000&to197112120000&status=DELIVRD`).expect(200)

        expect(request.body.error).toBe(false)
    })
    test("getting SMSs with wrong Id", async () => {
        const request = await api(app).get(`/sms/eferferferre`).expect(400)
        
        expect(request.body.error).toBe(true)
    })
})