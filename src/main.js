import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import Apxor from "apxor";
import CE from "apxor-qe";
import ApxorRTM from "apxor-rtm";

Apxor.init(
  "362a4f0e-a0f1-42f9-b1b5-7f42421bfd9b",
  {
    plugins: ["ApxorRTM"],
    deps: [ApxorRTM, CE],
    version: "0.1",
    debug: true,
    auto_event_logging: true,
  },
  (e) => console.log("Successfully Initialized Apxor SDK:", e),
  (e) => console.log("Apxor SDK Initialization failed:", e),
);
const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
