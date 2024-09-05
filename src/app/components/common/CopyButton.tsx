import { copyToClipboard } from "@/utils/copy";
import { Button, Text } from "@radix-ui/themes";
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
        <Button
            size="1"
            variant="soft"
            color="gray"
            radius="full"
            className={`border-4 ${isAnimating ? 'scaleClick' : ''}`}
            onClick={handleCopy}>
            <Text className="md:w-[calc(6ch+1rem)] truncate">
                {displayName}
            </Text>
        </Button>
    );
}

export default CopyButton;