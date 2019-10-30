export interface AuthResponse {
    user: {
        email: string,
        password: string,
        access_token: string,
        expires_in: number
    };
}
