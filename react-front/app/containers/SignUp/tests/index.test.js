// import { MockedProvider } from '@apollo/react-testing';
// import { IntlProvider } from 'react-intl';

import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import HomePage, { HomePageTest } from '../index';

import {
  cleanup,
  render,
  fireEvent,
  waitForDomChange,
} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import { Auth, input } from 'aws-amplify';
import { MemoryRouter } from 'react-router-dom';
import SignUpPage from '../index';
import SignUp, { handleSubmit } from '../signUpForm';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

describe('react testing vs Enzyme', () => {
  afterEach(cleanup);

  describe('Enzyme', () => {
    //these are for enzyme
    const wrapper = mount(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );
    const inputEmail = wrapper.find('[data-testid="inputEmail"]');
    const inputPassword = wrapper.find('[data-testid="inputPassword"]');
    const inputFirstName = wrapper.find('[data-testid="inputFirstName"]');
    const inputLastName = wrapper.find('[data-testid="inputLastName"]');
    const submitButton = wrapper.find('[data-testid="submitButton"]');

    const mockHandleSubmit = jest.fn();
    Auth.signUp = jest.fn();
    global.alert = jest.fn();

    //these are for react-testing-library
    const { getByTestId, debug } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );
    const inputEmailT = getByTestId('inputEmail');
    const inputPasswordT = getByTestId('inputPassword');
    const inputFirstNameT = getByTestId('inputFirstName');
    const inputLastNameT = getByTestId('inputLastName');
    const submitButtonT = getByTestId('submitButton');

    it('snapshot SignUp', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('render form fields', async () => {
      expect(inputEmail.length).toBe(1);
      expect(inputPassword.length).toBe(1);
      expect(inputFirstName.length).toBe(1);
      expect(inputLastName.length).toBe(1);
      expect(submitButton.length).toBe(1);
    });

    it('check weather form fields are empty', () => {
      expect(inputEmail.text()).toBe('');
      expect(inputPassword.text()).toBe('');
      expect(inputFirstName.text()).toBe('');
      expect(inputLastName.text()).toBe('');
      expect(submitButton.prop('disabled')).toBeTruthy();
    });

    it('check Auth.SingUp in triggered', () => {
      submitButton.simulate('submit');
      expect(Auth.signUp).toBeCalled();
    });

    it('check Alert reject Auth.signUp', () => {
      window.alert = jest.fn();
      Auth.signUp = jest.fn(() => {
        throw new Error();
      });
      submitButton.simulate('submit');
      expect(Auth.signUp).toBeCalled();
      expect(window.alert).toBeCalled();
    });

    it('rendering footer and headers', () => {
      const wrapper = mount(
        <MemoryRouter>
          <SignUpPage />
        </MemoryRouter>,
      );

      const Header = wrapper.find('Header');
      const Footer = wrapper.find('Footer');
      expect(Header.length).toBe(1);
      expect(Footer.length).toBe(1);
    });

    it('check form fields onChange', () => {
      wrapper.setProps;

      fireEvent.change(inputEmailT, { target: { value: 'Email' } });
      fireEvent.change(inputPasswordT, { target: { value: 'Password' } });
      fireEvent.change(inputFirstNameT, { target: { value: 'FirstName' } });
      fireEvent.change(inputLastNameT, { target: { value: 'LastName' } });

      expect(inputEmailT.value).toBe('Email');
      expect(inputPasswordT.value).toBe('Password');
      expect(inputFirstNameT.value).toBe('FirstName');
      expect(inputLastNameT.value).toBe('LastName');
    });

    // it('check button password validation', () => {
    //   wrapper.setState({ email: 'email', password: 'password' });
    //   submitButton.simulate('submit');
    //   wrapper.update();
    //   wrapper.setProps({});
    //   // expect(wrapper.update);
    //   expect(submitButton.props()).toBe({});
    // });

    // it('empty form field after submit', () => {
    //   fireEvent.change(inputEmailT, { target: { value: 'Email' } });
    //   submitButton.simulate('submit');
    //   expect(Auth.signUp).toBeCalled();
    //   expect(inputEmailT.value).toBe('');
    // });
  });

  describe('testingLib', () => {
    it('testingLib', async () => {
      const handleSubmit = jest.fn();

      const { getByTestId, debug } = render(
        <MemoryRouter>
          <SignUp submit={handleSubmit} />
        </MemoryRouter>,
      );

      const inputEmail = getByTestId('inputEmail');
      const submitButton = getByTestId('submitButton');
      const form = getByTestId('form');

      Auth.signUp = jest.fn();

      fireEvent.change(inputEmail, { target: { value: 'Email' } });

      expect(inputEmail.value).toBe('Email');
      // submitButton.simulate('click', { handler });

      // await waitFor();
      // fireEvent.click(submitButton, { handleSubmit });
      fireEvent.submit(submitButton);
      fireEvent.submit(form);

      // expect(submitButton).toBe('');
      // debug();

      expect(Auth.signUp).toHaveBeenCalledTimes(2);
      // expect(handleSubmit).toHaveBeenCalledTimes(1);

      expect(inputEmail.value).toBe('Email');
    });
  });
});

// it('calls event handler; "handleSubmit"', async () => {
//   const Wrapper = shallow(<SignUp />);
//   // const inputEmail = findByTestAttr(Wrapper, 'inputEmail');
//   const inputEmail = Wrapper.find('.inputEmailTest').simulate('change');
//   expect(inputEmail).toHaveBeenCalled();

// const componentInstance = Wrapper.instance();

// componentInstance.setState({
//   isLoading: false,
//   email: 'demo',
//   password: 'demo',
// });
// const event = {
//   preventDefault: () => {},
// };
// Auth.signIn = jest.fn().mockImplementation(() => {
//   message: 'success';
// });
// await componentInstance.handleSubmit(event);
// expect(componentInstance.state.isLoading).toEqual(true);
// });

// describe('Ben Awad', () => {
//   afterEach(cleanup);
//   it('react testing', async () => {
//     const push = jest.fn();
//     const { getByTestId, debug, waitForDomChange, waitForElement } = render(
//       <MemoryRouter>
//         <HomePage />
//       </MemoryRouter>,
//     );
//     const inputEmail = getByTestId('inputEmail');
//     const submitButton = getByTestId('submitButton');
//     fireEvent.change(inputEmail, { target: { value: 'email' } });
//     fireEvent.submit(submitButton);
//     await waitForElement(() => getByText('email'));
//     await waitForDomChange();
//     debug();
//   });
// });

// it('mocking signUp via andre', () => {
//   const mockSignUp = jest.fn().mockReturnValue(
//     Promise.resolve({
//       message: 'success',
//     }),
//   );
//   expect(render(<SignUp />).find('[data-test=inputEmail'));
// });

// describe('<SignUp />', () => {
//   it('should render table of currencies', async () => {
//     const wrapper = mount(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <IntlProvider locale="en">
//           <SignUp />
//         </IntlProvider>
//       </MockedProvider>,
//     );
//     expect(wrapper.find('header')).toHaveLength(1);
//   });
// });

// describe('testing SignUp', () => {
//   it('check submitHandle is trigger when button is clicked', () => {
//     const spy = sinon.spy();
//     const wrapper = shallow(<SignUp />);
//     wrapper.find('.btn-brand-02').simulate('click');
//     expect(spy.calledOnce).toBe(true);
//   });
// });

// it('mocking api request', () => {
//   global.Auth.SignUp = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve({ data: { message: 'success' } }),
//     }),
//   );
// });

// it('andre testing state', () => {
//   // expect.assertions(1);
//   expect(shallow(<SignUp />)).toMatchSnapshot();
// });

// it("rendering props Component",()=>{
//   const wrapper=shallow(<SignUp prop1="name" prop2={object={key1:"hello"}} toggleForcast={()=>{}} />)

//   expect(wrapper).toMatchSnapshot()
// })

// it("rendering props Component",()=>{
//   const wrapper=render(<SignUp prop1="name" prop2={object={key1:"hello"}} toggleForcast={()=>{}} />)

//   expect(wrapper).toMatchSnapshot()
// })

// it('get a div inside component',()=>{
//   const wrapper=render(<SignUp prop1="name" prop2={object={key1:"hello"}} toggleForcast={()=>{}} />)
// //you can use any class or id for selecting component inside wrapper
//   const text=wrapper.find('LargeText')

//   const wrapper=mount(<SignUp prop1="name" prop2={object={key1:"hello"}} toggleForcast={spy} />)

// })

// it('calls a function on click',()=>{
//   const spy=sinon.spy();

//   const wrapper=mount(<SignUp prop1="name" prop2={object={key1:"hello"}} toggleForcast={spy} />)

//   wrapper.find("div").first().simulate("click");

//   expect.(spy.calledOnce).toBe(true);

// })

// it('2+2', () => {
//   expect(2 + 2).toBe(4);
// });

// it('mock signIN', () => {
//   const mockSignIn = jest.fn().mockReturnValue(
//     Promise.resolve({
//       json: () =>
//         Promise.resolve({
//           username: 'userName',
//           password: 'userPassword',
//         }),
//     }),
//   );
//   return mockSignIn;
// });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
