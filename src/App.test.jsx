import { render} from "@testing-library/react";
import App from "./App";
import { test } from "vitest";
import '@testing-library/jest-dom'

test("renders without crashing", () => {
  render(<App />)
});