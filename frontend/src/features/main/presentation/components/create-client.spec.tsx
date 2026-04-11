import { render, screen, fireEvent } from "@testing-library/react";
import { CreateClient } from "./create-client";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useCreateClient } from "@/shared/application/hooks";

// Mock the hooks
vi.mock("@/shared/application/hooks", () => ({
    useCreateClient: vi.fn(),
}));

describe("CreateClient Component", () => {
    const onCancel = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should display a spinner when pending", () => {
        (useCreateClient as any).mockReturnValue({
            createClient: vi.fn(),
            isPending: true,
            error: null,
        });

        render(<CreateClient onCancel={onCancel} />);
        expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("should display an error message if creation fails", () => {
        (useCreateClient as any).mockReturnValue({
            createClient: vi.fn(),
            isPending: false,
            error: { message: "Creation failed" },
        });

        render(<CreateClient onCancel={onCancel} />);
        expect(screen.getByText("Error: Creation failed")).toBeInTheDocument();
    });

    it("should call createClient when Save button is clicked", async () => {
        const createClientMock = vi.fn().mockResolvedValue({ id: 1 });
        (useCreateClient as any).mockReturnValue({
            createClient: createClientMock,
            isPending: false,
            error: null,
        });

        render(<CreateClient onCancel={onCancel} />);

        fireEvent.change(screen.getByPlaceholderText("Ingrese nombre completo"), { target: { value: "Jane Doe" } });
        fireEvent.change(screen.getByPlaceholderText("cliente@ejemplo.com"), { target: { value: "jane@example.com" } });
        fireEvent.click(screen.getByText("Guardar"));

        expect(createClientMock).toHaveBeenCalledWith({ name: "Jane Doe", email: "jane@example.com" });
    });

    it("should call onCancel when Cancel button is clicked", () => {
        (useCreateClient as any).mockReturnValue({
            createClient: vi.fn(),
            isPending: false,
            error: null,
        });

        render(<CreateClient onCancel={onCancel} />);
        fireEvent.click(screen.getByText("Cancelar"));
        expect(onCancel).toHaveBeenCalled();
    });
});
