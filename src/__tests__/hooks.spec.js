// npm test (here paste url of copy path)
// paste coverage folder index.html to see test coverage report
import { renderHook, act } from '@testing-library/react-hooks'
import moxios from 'moxios';

import { useSearchForm, useDebounce, useSearch } from '../hooks'

jest.useFakeTimers()

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

describe('useDebounce hook' , () => {
  it('should return the same value after longy dealy', () => {
      const expectedResult = 'text'
      const { result } = renderHook(() => useDebounce(expectedResult, 500))

      expect(result.current).toBe(expectedResult)

      // Noe we will use mock timers
      jest.advanceTimersByTime(510)
      expect(result.current).toBe(expectedResult)

  })

  it('should return the same value before timer is reached', () => {
      const value1='text1'
      const value2 = 'text2'

      const { result, rerender } = renderHook(
        ({ value, delay }) => useDebounce(value, delay),
        { initialProps: { value: value1, delay: 500 } }
    );

      expect(result.current).toBe(value1)

      jest.advanceTimersByTime(490)

      // here we are testing that 490 != 500 so it wont execute 500 which shows test that timer is in effect
      // we will simulate typing new letter but it didn reach 500ms so it will be still value1
      // 490 < 500 and this is fake timer
      rerender({value: value2}) // here we didnot pass default will choose default 500
      expect(result.current).toBe(value1)

      jest.runAllTimers()
      expect(result.current).toBe(value2)

  })
})

describe('useSearch Hook', () => {
   beforeEach(() => {
       moxios.install()
   })
   afterEach(() => {
       moxios.uninstall()
   })

    it('should return init data - empty articles', () => {
        const { result } = renderHook(() => useSearch())

        expect(result.current.articles).toEqual([])
    })

    it('should return init data - IDLE status', () => {
        const { result } = renderHook(() => useSearch())

        expect(result.current.status).toBe('IDLE')
    })

    it('shuld have PENDING status when call is started', () => {
        const { result } = renderHook(() => useSearch('elon'))

        expect(result.current.status).toBe('PENDING')
    })

    it('should have SUCCESS status when request is executed', async() => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10`, {
            status: 200,
            responseText: ["elon", ["Elon Musk"], [""], ["link"]]
        })

        const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'))

        await waitForNextUpdate()
        expect(result.current.status).toBe('SUCCESS')
    })

    it('should return articles when call is executed', async() => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10`, {
            status: 200,
            responseText: ["elon", ["Elon Musk"], [""], ["link"]]
        })

        const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'))

        await waitForNextUpdate()
        expect(result.current.articles).toEqual([{id: 'link', label: 'Elon Musk'}])
    })

    it('shoud return status ERROR when request failed', async() => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10`, {
            status: 500,
            responseText: ["elon", ["Elon Musk"], ["", ["link"]]]
        })

        const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'))

        await waitForNextUpdate()
        expect(result.current.status).toBe('ERROR')
    })


})

