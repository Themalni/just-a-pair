import { store } from '@/store';
import { fb } from "@/firebase";

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
			store.commit('UPDATE_USER', { user })
		})
	}
}