

// switch | case for every state context (subscriptions) //
export const selectState = (type) => {
    switch(type) {
        case 'getUserAuth':
            return (state) => state.user.auth?.status === 200 && state.user.auth?.token
        case 'getUserData':
            return (state) => state.user.datasUser?.body !== undefined && state.user.datasUser?.body
        case 'getError':
            return (state) => state?.user?.error !== undefined && state?.user?.error
        case 'cancelEditForm':
            return (state) => state?.events?.cancelEditForm
        case 'getRemeberStatus':
            return (state) => state?.events?.rememberActivated 
    }
}