import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './../form';

describe("<Form/>", () => {
    test('render email input', () => {
        render(<Form />);
        const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    });

    test('pass valid email to test email input field', () => {
    render(<Form />);
    
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");
    
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    });

    // test('pass invalid email to test input value', () => {
    //     render(<Form />);
     
    //     const inputEl = screen.getByTestId("email-input");
    //     userEvent.type(inputEl, "test");
     
    //     expect(screen.getByTestId("email-input")).toHaveValue("test");
    //     expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    //     expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
    // });
})
