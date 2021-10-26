import { makeAutoObservable } from "mobx"

export default new class Counter {
	count = 0
	constructor() {
		makeAutoObservable(this)
	}
	increment() { this.count += 1 }
	decrement() { this.count -= 1 }
}