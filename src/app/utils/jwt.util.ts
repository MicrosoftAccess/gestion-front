export function tokenGetter(): string {
    return localStorage.getItem("access_token") || '';
}