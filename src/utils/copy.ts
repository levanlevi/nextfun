export const copyToClipboard = (text: string,
    onSuccess?: () => void,
    onError?: () => void): void => {
    navigator.clipboard.writeText(text)
        .then(() => {
            if (onSuccess) {
                onSuccess();
            }
        })
        .catch(() => {
            if (onError) {
                onError();
            }
        });
}