type AccessTokenResponse = {
    access_token: string;
    token_type: string;
}

export async function createAccessToken(): Promise<string> {
    try {
        const body = new URLSearchParams({
            grant_type: "client_credentials",
            client_id: process.env.AUTH0_CLIENT_ID!,
            client_secret: process.env.AUTH0_CLIENT_SECRET!,
            audience: `${process.env.AUTH0_MANAGEMENT_API_DOMAIN}/api/v2/`,
        });

        const response = await fetch(
            `${process.env.AUTH0_MANAGEMENT_API_DOMAIN}/oauth/token`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: body.toString(),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to get access token");
        }

        const data: AccessTokenResponse = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error creating access token:", error);
        throw new Error("Failed to get access token");
    }
}
