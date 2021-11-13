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

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="1"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('1')
    })
    it('Test screen keyboard: key 2', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="2"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('2')
    })
    it('Test screen keyboard: key 3', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="3"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('3')
    })
    it('Test screen keyboard: key 4', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="4"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('4')
    })
    it('Test screen keyboard: key 5', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="5"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('5')
    })
    it('Test screen keyboard: key 6', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="6"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('6')
    })
    it('Test screen keyboard: key 7', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="7"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('7')
    })
    it('Test screen keyboard: key 8', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="8"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('8')
    })
    it('Test screen keyboard: key 9', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="9"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('9')
    })
    it('Test screen keyboard: key 0', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="0"]');
        btn.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe('0')
    })
    it('Test screen keyboard: key 9', () => {
        const wrapper = mount(Calculator)

        const showKeyboard = wrapper.find('input[name=screenKeyboard]')
        showKeyboard.setChecked()

        const radBtn = wrapper.find('input[name=radio1]')
        radBtn.setChecked()

        const btn = wrapper.find('button[name="9"]');
        btn.trigger('click')

        const btnDel = wrapper.find('button[name="<-Backspace"]');
        btnDel.trigger('click')

        const operand1 = wrapper.find('input[name=operand1]');

        expect(wrapper.vm.operand1).toBe(0)
    })
})