import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: { paymentsList: [], categoryList: [], pageCount: 0, },
    mutations: {
        setPaymentsListData(state, payload) {
            // state.paymentsList = payload

            state.paymentsList.push(...payload)
        },
        addDataToPaymentsList(state, payload) {
            // state.paymentsList.push(payload)
            if (!Array.isArray(payload)) {
                payload = [payload]
            }
            payload.forEach(element => {
                if (state.paymentsList.find(el => el.id == element.id)) {
                    return
                } else state.paymentsList.push(element)
            });
        },
        setCategories(state, payload) {
            if (!Array.isArray(payload)) {
                payload = [payload]
            }
            state.categoryList.push(...payload)
        },
        addCaregoryToCategoryList(state, payload) {
            state.categoryList.push(payload)
        },
        setPageCount(state, payload) {
            state.pageCount = Object.keys(payload).length
        },
        deletteDataFromPaymentList(state, id) {
            let index = state.paymentsList.findIndex(item => item.id == id);
            state.paymentsList.splice(index, 1)
        },
        changeDataInPaymentList(state, payload) {
            let index = state.paymentsList.findIndex(item => item.id == payload.id);
            state.paymentsList[index] = payload;
        }

    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + +cur.value, 0)
        },
        getCategoryList: state => state.categoryList,
        getPageCount: state => state.pageCount
    },
    actions: {
        fetchDataList({ commit }) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const items = [];
                    for (let i = 1; i < 101; i++) {
                        items.push({
                            id: i,
                            date: "2020.03.28",
                            category: "Food",
                            value: +i
                        });
                    }
                    resolve(items)
                }, 1000);
            }).then(res => {
                commit("setPaymentsListData", res);
            });
        },

        fetchData({ commit }, pageNum) {
            return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            "page1": [
                                { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page2": [
                                { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],
                            "page3": [
                                { "id": 12, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 23, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 33, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page4": [
                                { "id": 44, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 52, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 61, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],
                            "page5": [
                                { "id": 122, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 21, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 13, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page6": [
                                { "id": 422, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 54, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 65, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],
                        }, )
                    }, 1000)

                })
                .then(res => {
                    // console.log(res);
                    // console.log(res[`page` + pageNum]);
                    // console.log(this.state);
                    commit('addDataToPaymentsList', res[`page` + pageNum])
                })
        },
        loadCategories({ commit }) {
            return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(['Food', 'Transport', 'Education', 'Entertainment'])
                    }, 1000)
                })
                .then(res => {
                    commit('setCategories', res)
                })
        },
        loadPageCount({ commit }) {
            return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            "page1": [
                                { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page2": [
                                { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],
                            "page3": [
                                { "id": 12, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 23, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 33, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page4": [
                                { "id": 44, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 52, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 61, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],
                            "page5": [
                                { "id": 122, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 21, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 13, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page6": [
                                { "id": 422, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 54, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 65, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],

                        }, )
                    }, 1000)

                })
                .then(res => {
                    // console.log(res);
                    commit('setPageCount', res)

                })
        },
    },

})