import React from 'react';
import {cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditProduct from '../Components/Usecase/Content/Product/editProduct';

afterEach(cleanup)
it('renders without crash',()=>{
    render(<div></div>)
  })