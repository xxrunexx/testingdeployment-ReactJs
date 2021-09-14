import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'

import FormPage from "./FormPage";

describe('FormPage', () => {
    test('renders FormPage component', () => {
        render(<FormPage/>)
        // screen.debug();

        expect(screen.getByText('Formulir Buku Baru')).toBeInTheDocument()
        expect(screen.getByLabelText(/Judul/)).toBeInTheDocument()
    });

    test('input text for judul and pengarang', () => {      
        render(<FormPage/>)
        // screen.debug();
        fireEvent.input(
            screen.getByRole("textbox", {name: /judul/i}), 
            {target: {value: "Bumi Manusia"}}
        )
        
        fireEvent.input(
            screen.getByRole("textbox", {name: /pengarang/i}), 
            {target: {value: "Pram"}}
        )

        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Pram");   
    });
    
    test('input text for pengarang with number', () => {    
        render(<FormPage/>)
        // screen.debug();
        fireEvent.input(
            screen.getByRole("textbox", {name: /judul/i}), 
            {target: {value: "Bumi Manusia"}}
        )
        
        fireEvent.input(
            screen.getByRole("textbox", {name: /pengarang/i}), 
            {target: {value: "Pram4"}}
        )

        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Pram4"); 
        expect(screen.getByText("Nama Pengarang Harus Berupa Huruf")).toBeInTheDocument(); 
    });

    test('submit button', () => {     
        render(<FormPage/>)
        // screen.debug();
        fireEvent.input(
            screen.getByRole("textbox", {name: /judul/i}), 
            {target: {value: "Bumi Manusia"}}
        )
        
        fireEvent.input(
            screen.getByRole("textbox", {name: /pengarang/i}), 
            {target: {value: "Pram"}}
        )

        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Pram"); 
        fireEvent.click(screen.getByRole("button"))
        expect(screen.getByLabelText(/Judul/)).toHaveValue("");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue(""); 
    });
})