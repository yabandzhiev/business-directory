import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

describe("Testing Api", () => {
  describe("Getting data", () => {
    const queryClient = new QueryClient();
    const renderComponent = () =>
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </QueryClientProvider>
      );

    test("should make call to api and receive data", async () => {
      renderComponent();

      await waitFor(() => {
        expect(screen.getByText(/Zazio/i)).toBeInTheDocument();
      });
    });
    test("should open item and display proper data", async () => {
      renderComponent();

      await waitFor(async () => {
        const button = await screen.findByText(/Zazio/i);
        fireEvent.click(button);
        expect(await screen.findByText(/Dabvine/i));
      });
    });
  });
});
