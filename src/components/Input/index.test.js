import React from 'react'
import { shallow } from 'enzyme'

import Input from '.'

const render = (props) => shallow(<Input {...props} />)

describe('Input Component', ()=> {
    let sut;
    let props;

    describe('without props', () => {
         // Input components result props should match snapshot
        beforeEach(() => {
            props = {
                placeholder: "Input search query",
                name: 'search'
            };
            sut = render(props);
        });

        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot();
        })
    });

   
})
