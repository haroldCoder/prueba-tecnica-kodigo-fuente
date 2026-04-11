import { render, screen } from "@testing-library/react";
import { Tickets } from "./tickets";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useFetchTickets } from "@/shared/application/hooks";

// Mock the hooks
vi.mock("@/shared/application/hooks", () => ({
    useFetchTickets: vi.fn(),
    useDeleteTicket: vi.fn(() => ({
        deleteTicket: vi.fn(),
        isPending: false,
        error: null,
    })),
    useCreateTicket: vi.fn(),
    useUpdateTicket: vi.fn(),
    useFetchTicketId: vi.fn(),
}));

describe("Tickets Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should display a spinner when loading", () => {
        (useFetchTickets as any).mockReturnValue({
            data: null,
            isLoading: true,
            error: null,
            refetch: vi.fn(),
        });

        render(<Tickets />);
        expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("should display an error message if fetch fails", () => {
        (useFetchTickets as any).mockReturnValue({
            data: null,
            isLoading: false,
            error: { message: "Fetch failed" },
            refetch: vi.fn(),
        });

        render(<Tickets />);
        expect(screen.getByText("Error: Fetch failed")).toBeInTheDocument();
    });

    it("should display the tickets list when data is available", () => {
        (useFetchTickets as any).mockReturnValue({
            data: [
                {
                    id: 1,
                    title: "Test Ticket",
                    description: "Description",
                    status: "open",
                    priority: "high",
                    client: { id: 1, name: "Client 1" },
                    agent: { id: 1, name: "Agent 1" },
                    createdAt: new Date().toISOString(),
                },
            ],
            isLoading: false,
            error: null,
            refetch: vi.fn(),
        });

        render(<Tickets />);
        expect(screen.getByText("Tickets")).toBeInTheDocument();
        expect(screen.getByText("Test Ticket")).toBeInTheDocument();
        expect(screen.getByText("Client 1")).toBeInTheDocument();
        expect(screen.getByText("Agent 1")).toBeInTheDocument();
    });
});
