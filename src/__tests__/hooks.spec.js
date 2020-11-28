// npm test (here paste url of copy path)
// paste coverage folder index.html to see test coverage report
import { renderHook, act } from '@testing-library/react-hooks'

import {useSearchForm} from '../hooks'

describe('useSearchForm hook', () => {
    let event1;
    let event2;

    beforeEach(() => {
        event1 = {
            target: {
                value: 'data1'
            }
        };
        event2 = {
            target: {
                value: 'data2'
            }
        }
    })

    it('should update search value', () => {
        const { result } = renderHook(() => useSearchForm())
        expect(result.current.searchValue).toBe('')

        // do action
        act(() =>  result.current.onSearchChange(event1))
        expect(result.current.searchValue).toBe('data1')

        // do another action
        act(() => result.current.onSearchChange(event2))
        expect(result.current.searchValue).toBe('data2')
    })
})