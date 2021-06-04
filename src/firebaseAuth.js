import store from './store';
import { fb } from "@/firebase";
import { SET_USER, CLEAR_USER } from "@/store/types";

export default {
	install: (Vue, options) => {
		const auth = fb.auth()
		Vue.prototype.$auth = {
			login: async (userName, password) => {
				return await auth.signInWithEmailAndPassword(userName, password)
			},
			logout: async () => {
				await auth.signOut()
			}
		}
		auth.onAuthStateChanged(user => {
			if (user) {
				return store.dispatch(SET_USER, { displayName: user.displayName, email: user.email })
			}
			return store.dispatch(CLEAR_USER);
		})
	}
}