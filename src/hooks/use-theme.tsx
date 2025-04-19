
import { useContext, createContext } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

type ThemeProviderState = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const initialState: ThemeProviderState = {
  theme: undefined,
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    return useNextTheme();
    
  return context;
}
