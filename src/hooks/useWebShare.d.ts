export default function useWebShare(): {
    share: (title?: string, text?: string) => Promise<void>;
};
