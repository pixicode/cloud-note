enum UserApiState {
    SIGNIN_SUCCESS,
    SIGNIN_ERROR
}

interface UserApiResponse {
    success: boolean;
    details?: string;
    apiState?: UserApiState;
}

export interface UserApiStatus {
    isLoading: boolean;
    isError: boolean;
    errorDetais?: string;
}


class UserApi {

    public static signIn(userName: string, password: string) {
        console.log("Signing in from API!");

        const response: UserApiResponse = {
            success: userName === "krin" ? true : false,
            details: "Api Reason Detail",
            apiState: UserApiState.SIGNIN_ERROR
        }

        return new Promise<UserApiResponse>((resolve, reject) => {
            setTimeout(() => resolve(response), 1000);
        });
    }

    public static register(userName: string, password: string) {
        console.log("Register in from API!");
    }

    public static signOut() {
        console.log("Signing out from API!");
    }

}

export default UserApi;