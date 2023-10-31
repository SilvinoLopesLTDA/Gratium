import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

test("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(true).toBeDefined();
});
