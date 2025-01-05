

export default function Home() {

    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");

    if (authorizationCode) {
        console.log("Authorization Code:", authorizationCode);
        fetch(process.env.NEXT_PUBLIC_TOKEN_EXCHANGE_URL as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: authorizationCode }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Token exchange successful:", data);
                // Handle tokens (e.g., save access token in local storage or cookies)
            })
            .catch((error) => {
                console.error("Token exchange failed:", error);
            });

    } else {
        console.error("Authorization code not found in URL.");
    }

    return (
        <div>Logged in!</div>
    )
}