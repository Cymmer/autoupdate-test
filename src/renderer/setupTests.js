import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import fetchMock from 'jest-fetch-mock';

class SVGPathElement extends HTMLElement {}
window.SVGPathElement = SVGPathElement;

configure({ adapter: new Adapter() });
fetchMock.enableMocks();
