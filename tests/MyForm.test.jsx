import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MyForm } from "../src/comps/MyForm";
import axiosMock from "axios-mock-adapter";
import axios from "axios";


// Create a mock for Axios
const axiosMockInstance = new axiosMock(axios);

describe("MyForm Component", () => {
  it("should display success message on successful form submission", async () => {
    // Arrange
    render(<MyForm />);
    const nameInput = screen.getByLabelText(/Nombre del entrevistador/i);
    const lastNameInput = screen.getByLabelText(/Apellido del entrevistador/i);
    const emailInput = screen.getByLabelText(/Email del entrevistador/i);
    const submitButton = screen.getByText(/Submit/i);

    const successMessage = "Success!";
    const intervieweeData = {
      name: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      isActive: false,
    };

    axiosMockInstance.onPost("http://localhost:8080/add-interviewer").reply(200);

    // Act
    fireEvent.change(nameInput, { target: { value: intervieweeData.name } });
    fireEvent.change(lastNameInput, { target: { value: intervieweeData.lastName } });
    fireEvent.change(emailInput, { target: { value: intervieweeData.email } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
       expect(screen.getByText(successMessage)).toBeInTheDocument();
      });
  });

  it("should display error message on failed form submission because invalid name", async () => {
    // Arrange
    render(<MyForm />);
    const nameInput = screen.getByLabelText(/Nombre del entrevistador/i);
    const lastNameInput = screen.getByLabelText(/Apellido del entrevistador/i);
    const emailInput = screen.getByLabelText(/Email del entrevistador/i);
    const submitButton = screen.getByText(/Submit/i);

    const intervieweeData = {
      name: "J",
      lastName: "Doe",
      email: "john.doe@example.com",
      isActive: true,
    };

    axiosMockInstance.onPost("http://localhost:8080/add-interviewer").reply(400, { message: "Invalid name" });

    // Act
    fireEvent.change(nameInput, { target: { value: intervieweeData.name } });
    fireEvent.change(lastNameInput, { target: { value: intervieweeData.lastName } });
    fireEvent.change(emailInput, { target: { value: intervieweeData.email } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
        expect(screen.getByText(/Invalid name/)).toBeInTheDocument();
      });
  });
});
