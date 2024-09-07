import { Router } from "express";
const router = Router();

export const loggingMiddleware = (req, res, next) => {
    const startTime = Date.now(); // Capture the start time of the request
    const { method, url, ip } = req; // Destructure the method, URL, and IP from the request object

    console.log(`[${new Date().toISOString()}] - ${method} ${url} - IP: ${ip}`);

    // Listen for the response to be finished
    res.on('finish', () => {
        const endTime = Date.now(); // Capture the end time when the response is finished
        const timeTaken = endTime - startTime; // Calculate the time taken
        console.log(`Response status: ${res.statusCode} - Time taken: ${timeTaken} ms`);
    });

    next(); // Pass control to the next middleware or route handler
};
