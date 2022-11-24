import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import { MyCounter } from '../src';
describe('Common render', function () {
    it('renders without crashing', function () {
        render(React.createElement(MyCounter, null));
    });
});
//# sourceMappingURL=common.test.js.map