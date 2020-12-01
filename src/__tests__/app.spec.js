import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from "react-router-dom";
import App from '../App';

// Memory router to keep the history of url and check paths and check application based on your path
// keylength when regenerated should be same to make it repeatable
const render = (initialEntries) => mount(<MemoryRouter keyLength={0} initialEntries = {initialEntries}><App /></MemoryRouter>)

describe('App component', () => {
    let sut;

    describe('when home page is rendered', () => {
       beforeEach(() => {
           sut = render(['/'])
       })

        it('should match home page snapshot', () => {
          expect(sut).toMatchSnapshot()
        })
    })   

    describe('when not found page is rendered', () => {
        beforeEach(() => {
            sut = render(['/dffgsdff'])
        })

        it('should match not found page snapshot', () => {
            expect(sut).toMatchSnapshot()
        })
    })

    describe('when search page is rendered', () => {
        beforeEach(() => {
            sut = render(['/search'])
        })

        it('should match search page snapshot', () => {
            expect(sut).toMatchSnapshot()
        })
    })
})