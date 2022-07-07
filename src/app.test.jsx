import { getData } from "./api/requests";
import {
  screen,
  render,
  fireEvent,
  waitFor,
  getByText,
} from "@testing-library/react";
import List from "./components/List/List";
import { MemoryRouter, Route } from "react-router-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { act } from "react-dom/test-utils";

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
