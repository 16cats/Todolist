import { test, expect } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import App from "./App";
import Todolist from "./Todolist";

test("renders Todolist component", () => {
    render(<Todolist />);
});
