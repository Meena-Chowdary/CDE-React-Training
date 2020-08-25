import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Register from '../Components/Usecase/Content/Register/register'

afterEach(cleanup)

it("Signup renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Register></Register>, div)
})

it('Button renders in correct way', ()=>{
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('signup')).toHaveTextContent('Create Account')
})