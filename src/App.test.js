import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

describe("App", () => {
  it("should render Home component by default", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const title = screen.getByTestId("title");
      expect(title).toBeInTheDocument();
    });
  });
});