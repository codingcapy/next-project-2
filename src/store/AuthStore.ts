
/*
 */

import { decryptToken, validateUser } from "@/components/controller";
import { setSession } from "./jwt.service";
import { create } from "zustand";

const useAuthStore = create((set, get) => ({
    user: null,
    authLoading: false,
    tokenLoading: true,
    setUser: (args: any) => set({ user: args }),
    logoutService: () => {
        setSession(null);
        set({ user: null, authLoading: false, tokenLoading: false });
    },
    loginService: async (formData: FormData) => {
        set({ authLoading: true });
        try {
            const username = formData.get("username") as string
            const password = formData.get("password") as string
            const res = await validateUser({ username, password });
            if (res?.result.user && res.result?.token) {
                setSession(res.result?.token);
                set({ user: res.result?.user, authLoading: false });
            }
            else {
                set({ authLoading: false, user: null });
            }
        }
        catch (err) {
            console.log(err);
            set({ authLoading: false });
        }
    },
    loginWithToken: async () => {
        try {
            const res = await decryptToken()
            if (res?.result?.user && res?.result.token) {
                setSession(res.result?.token);
                set({ user: res.result?.user, tokenLoading: false });
            }
            else {
                set({ tokenLoading: false, user: null });
            }
        }
        catch (err) {
            console.log(err);
            //get().logoutService(); //Object is of type 'unknown'.ts(2571) (parameter) get: () => unknown
        }
    }
}))

export default useAuthStore;