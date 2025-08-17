import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "SkillPilot", name: "SkillPilot" });




// This code sets up an Inngest-powered event-driven function in a Next.js app:

// Client Setup
// Creates an Inngest client named "SkillPilot" for sending and handling events.

// Function Definition
// Defines a background function helloWorld that listens to the event "test/hello.world".
// When triggered, it waits for 1 second and responds with a message using the event's email data.

// API Route
// Uses serve() from inngest/next to expose the function through an API route (GET, POST, PUT), allowing Inngest to call it when the event is triggered.