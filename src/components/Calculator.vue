<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" name="operand1" />
      <input v-model.number="operand2" type="number" name="operand2" />
      = {{ result }} <br />
      <!-- fib(<input v-model.number="operand1" />) fib(<input
        v-model.number="operand2"
      />) = {{ fibResult }} -->
    </div>
    <div v-show="error">Ошибка! {{ error }}</div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        :name="operand"
        v-bind:key="operand"
        v-bind:title="operand"
        v-bind:disabled="operand1 === '' || operand2 === ''"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
      <br />
      <input
        type="checkbox"
        id="screenKeyboard"
        v-model="screenKeyboardShow"
        :name="screenKeyboard"
      />
      <label for="screenKeyboard">Screen keyboard</label>

      <button
        v-show="screenKeyboardShow"
        v-for="key in keyboards"
        :name="`btn` + key"
        v-bind:key="key"
        v-bind:title="key"
        @click="enterNum(key, chosenOperand)"
      >
        {{ key }}
      </button>
      <br />
      <input
        type="radio"
        id="operand1"
        value="operand1"
        v-model="chosenOperand"
        :name="radio1"
      />
      <label for="operand1">Operand One</label>

      <input
        type="radio"
        id="operand2"
        value="operand2"
        v-model="chosenOperand"
        :name="radio2"
      />
      <label for="operand2">Operand Two</label>
      <br />
    </div>
    <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
    </div>
    <div class="logs">
      <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      operands: ["+", "-", "/", "*", "**", "integer divsion"],
      logs: {},
      screenKeyboardShow: false,
      chosenOperand: "",
      keyboards: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "<-Backspace",
      ],
    };
  },
  methods: {
    add() {
      this.result = +this.operand1 + +this.operand2;
      this.fibResult = this.fibb1 + this.fibb2;
    },
    substract() {
      this.result = +this.operand1 - +this.operand2;
      this.fibResult = this.fibb1 - this.fibb2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = +operand1 / +operand2;
        this.fibResult = this.fibb1 / this.fibb2;
      }
    },
    multiply() {
      this.result = +this.operand1 * +this.operand2;
      this.fibResult = this.fibb1 * this.fibb2;
    },
    pow() {
      this.result = (+this.operand1) ** +this.operand2;
      this.fibResult = this.fibb1 ** this.fibb2;
    },
    intDivision() {
      this.result =
        (+this.operand1 - (+this.operand1 % +this.operand2)) / +this.operand2;
      this.fibResult = this.fibb1 - (this.fibb1 % this.fibb2) / this.fibb2;
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.pow();
          break;
        case "integer divsion":
          this.intDivision();
          break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      Vue.set(this.logs, key, value);
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    enterNum(numb, operand) {
      if (numb == "<-Backspace") {
        let str = this[operand].toString();

        if (str.length == 1) {
          this[operand] = parseInt(str);
          return (this[operand] = 0);
          //
        } else if ((str = str.slice(0, -1))) {
          this[operand] = parseInt(str);
        }
      } else if (this[operand] == 0) {
        return (this[operand] = numb);
        //
      } else return (this[operand] += numb);
    },
  },
  computed: {
    fibb1() {
      return this.fib(this.operand1);
    },
    fibb2() {
      return this.fib(this.operand2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div {
  margin: 25px;
}
button {
  margin: 10px 2px 5px 2px;
}
</style>
