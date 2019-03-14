// import React from 'react'
// import ReactDOM from 'react-dom'
// import Test from '../src/Test'
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
// import Link from '../src/Link';

// describe('<Test />', () => {

//     it('should have ul with 3 children', () => {
//         const wrapper = shallow(<Test />);
//         expect(wrapper.find('ul.t').children().length).toBe(3);
//     });

//     it ('matches the snapshot', () => {
//         const tree = shallow(<Test />);
//         expect(toJson(tree)).toMatchSnapshot();
//     });
// });

// describe('<Link />', () => {

//     it('should link component accepts address prop', () => {
//         const wrapper = shallow(<Link address="www.google.com" />);
//         expect(wrapper.instance().props.address).toBe('www.google.com');
//     });

//     it('should a tag node renders href corectly', () => {
//         const wrapper = shallow(<Link address="www.google.com" />);
//         expect(wrapper.props().href).toBe('www.google.com');
//     });

// });