import React from "react";
import { render, screen } from "@testing-library/react";

import ClassRegisterJsonPage from "../ClassRegisterJsonPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders classRegisterJson page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ClassRegisterJsonPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("classRegisterJson-datatable")).toBeInTheDocument();
    expect(screen.getByRole("classRegisterJson-add-button")).toBeInTheDocument();
});
