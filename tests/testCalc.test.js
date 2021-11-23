import { expect, it } from "@jest/globals"
import { mount } from "@vue/test-utils"
import Calculator from '../src/components/Calculator'

describe('Test Calc', () => {
    it('Test first operand input', () => {
        const wrapper = mount(Calculator)
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("1")
        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test second operand input', () => {
        const wrapper = mount(Calculator)
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "1"
        operand2.trigger('input')
        expect(wrapper.vm.operand2).toBe(1)
    })

    it('Test method sum', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("2")

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "3"
        operand2.trigger('input')

        const btn = wrapper.find('button[name="+"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })

    it('Test method subtraction', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("5")

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "3"
        operand2.trigger('input')

        const btn = wrapper.find('button[name="-"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test method multiplication', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("2")

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "3"
        operand2.trigger('input')

        const btn = wrapper.find('button[name="*"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(6)
    })

    it('Test method division', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("10")

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "2"
        operand2.trigger('input')

        const btn = wrapper.find('button[name="/"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })

    it('Test method exponentiation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("2")

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "3"
        operand2.trigger('input')

        const btn = wrapper.find('button[name="**"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(8)
    })

    it('Test method integer divsion', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue("5")

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "2"
        operand2.trigger('input')

        const btn = wrapper.find('button[name="integer divsion"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test screen keyboard: key 1', () => {
        const wrapper = mount(Calculator)


        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked

        const btn = wrapper.find('button[name="btn1"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.trigger('input')

        expect(wrapper.vm.operand1).toBe(1)
    })
})