import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


test("Button ini disabled jadi gak bisa diklik bosku", () =>{
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
});

test("Tes spinner loading", () =>{
    const {container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()

    expect(container.querySelector("span")).toBeInTheDocument()
});

test("tes render <a> tag", () =>{
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument()
});

test("tes render <Link> component", () =>{
    const {container} = render(
        <Router>
            <Button href="" type="link" isExternal>

            </Button>
        </Router>
    )

    expect(container.querySelector("a")).toBeInTheDocument()
});
