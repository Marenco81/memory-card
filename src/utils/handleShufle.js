
export const handleShuffle = (array) => {
    const shufled = [...array];
    for (let i = shufled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shufled[i], shufled[j]] = [shufled[j], shufled[i]];
    }
    return shufled;
}