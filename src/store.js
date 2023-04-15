import create from 'zustand'

let timeout = setTimeout(() => { }, 0)

const useStore = create(set => ({
    user: null,
    setUser: (user) => {
        set({ user: user })
    },

    showUnauthorizedError: false,
    setShowUnauthorizedError: (bool) => {
        set({ showUnauthorizedError: bool })

        if (bool) {
            clearTimeout(timeout)
            timeout = setTimeout(() => set({ showUnauthorizedError: false }), 3000)
        }
    }
}))

export default useStore