import axios from 'axios';

type AccessTokenResponse = {
    access_token: string;
    token_type: string;
}

export async function createAccessToken(): Promise<string> {
    try {
        const response = await axios.post<AccessTokenResponse>(
            `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
            new URLSearchParams({
                grant_type: "client_credentials",
                client_id:       process.env.AUTH0_CLIENT_ID!,
                client_secret:  process.env.AUTH0_CLIENT_SECRET!,
                audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }
        )

        return response.data.access_token;
    } catch (error) {
        throw new Error("Failed to get access token");
    }
}
