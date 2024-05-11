export const handleSubmit = async (email, setMessage) => {
    try {
        const response = await fetch('your_api_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        response.ok = true; //assume back returned correct response

        if (response.ok) {
            const data = await response.json();
            setMessage('You have successfully subscribed to the email newsletter');
        } else {
            setMessage(response.statusText);
        }
    } catch (error) {
        setMessage(error.message);
    }
};


