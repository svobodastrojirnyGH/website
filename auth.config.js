export const authConfig = {
    pages: {
        signIn: '/admin/login',
        signOut: '/admin/logout'
    },

    callbacks: {
        authorized({ auth, request: {nextUrl} }){

            const isLoggedIn = !!auth?.user;
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');

            if (isOnAdmin) {
                if (isLoggedIn) return true;
                return false;
                
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/admin/dashboard', nextUrl));
            }

            return true;

        }
    },
    providers: []
} 