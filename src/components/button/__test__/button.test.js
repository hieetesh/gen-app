import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
// import { isTSAnyKeyword} from '@babel/types';

import {render, cleanup} from "@testing-library/react";
// import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>, div);
})