import { render, screen } from "@testing-library/react";
import { Agents } from "./agents";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useFetchAgents } from "@/shared/application/hooks";

// Mock the hooks
vi.mock("@/shared/application/hooks", () => ({
    useFetchAgents: vi.fn(),
    useCreateAgent: vi.fn(() => ({
        createAgent: vi.fn(),
        isPending: false,
        error: null,
    })),
}));

describe("Agents Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should display a spinner when loading", () => {
        (useFetchAgents as any).mockReturnValue({
            data: null,
            isLoading: true,
            error: null,
        });

        render(<Agents />);
        expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("should display an error message if fetch fails", () => {
        (useFetchAgents as any).mockReturnValue({
            data: null,
            isLoading: false,
            error: { message: "Fetch failed" },
        });

        render(<Agents />);
        expect(screen.getByText("Error: Fetch failed")).toBeInTheDocument();
    });

    it("should display the agents list when data is available", () => {
        (useFetchAgents as any).mockReturnValue({
            data: [
                { id: 1, name: "Agent 1", email: "agent1@example.com" },
            ],
            isLoading: false,
            error: null,
        });

        render(<Agents />);
        expect(screen.getByText("Agentes")).toBeInTheDocument();
        expect(screen.getByText("Agent 1")).toBeInTheDocument();
    });
});
