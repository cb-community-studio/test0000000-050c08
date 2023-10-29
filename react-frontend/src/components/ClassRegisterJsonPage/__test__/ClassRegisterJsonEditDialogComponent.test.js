import React from "react";
import { render, screen } from "@testing-library/react";

import ClassRegisterJsonEditDialogComponent from "../ClassRegisterJsonEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders classRegisterJson edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ClassRegisterJsonEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("classRegisterJson-edit-dialog-component")).toBeInTheDocument();
});
