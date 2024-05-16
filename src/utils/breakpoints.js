import { useMediaQuery } from 'react-responsive';

export function useMediaQueries() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1920px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 361px) and (max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 360px)' });

    return { isBigScreen, isTablet, isMobile };
}
