import React from "react";
import {create} from 'react-test-renderer';
import Status from "./Status";


test('Link changes the class when hovered', () => {
    const component = create(
        <Status >Facebook</Status>,
    );})