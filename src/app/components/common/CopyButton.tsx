import { copyToClipboard } from "@/utils/copy";
import { Box, Button, Text } from "@radix-ui/themes";
import { useState } from "react";

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayName, setDisplayName] = useState('Copy');

    const handleCopy = () => {
        copyToClipboard(textToCopy,
            () => {
                setIsAnimating(true);
                setDisplayName('Copied');
                setTimeout(() => { setIsAnimating(false); setDisplayName('Copy'); }, 2000);
            },
            () => console.log('Error copying'));
    }

    return (
        <Box
            className={`bg-background-elevation-3 text-text-secondary font-medium cursor-pointer px-3 py-1 rounded-xl ${isAnimating ? 'scaleClick' : ''}`}
            onClick={handleCopy}>
            {displayName}
        </Box>
    );
}

export default CopyButton;