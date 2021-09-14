import { renderHook, act } from '@testing-library/react-hooks';
import { useLowercase } from './useLowerCase';

describe('when rendered', ()=>{
    it("returns current initial value, lowercased", ()=> {
        const {result} = renderHook(
            ()=> useLowercase("Test String")
        )
        expect(result.current.value).toEqual("test string")
    })
})

describe('when called the update method', ()=>{
    it("changes the value and lowercases it", ()=> {
        const {result} = renderHook(
            ()=> useLowercase("Test String")
        )
        act(()=> result.current.update("Updated"))
        expect(result.current.value).toEqual("updated")
    })
})

describe('when re-rendered with another initial value', ()=>{
    it("updates the value", ()=> {
        const {result, rerender} = renderHook(
            ({text})=> useLowercase(text), {initialProps: {text: "Test String"}}
        )
        rerender({text: "Updated"})
        // act(()=> result.current.update("Updated"))
        expect(result.current.value).toEqual("updated")
    })
})