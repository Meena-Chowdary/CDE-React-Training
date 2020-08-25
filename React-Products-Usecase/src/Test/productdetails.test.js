import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from '../Components/Usecase/Content/Product/productDetails';

afterEach(cleanup)
it('renders without crash',()=>{
    render(<div></div>)
  })

  it("home component renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<ProductDetails></ProductDetails>, div)
})