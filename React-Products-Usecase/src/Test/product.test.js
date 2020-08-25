import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from '../Components/Usecase/Content/Product/products';

afterEach(cleanup)
it('renders without crash',()=>{
    render(<div></div>)
  })

  it("home component renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Products></Products>, div)
})

it('Select option renders in correct way', ()=>{
    const {getByTestId} = render(<Products></Products>)
    expect(getByTestId('label')).toHaveTextContent('Category')
})