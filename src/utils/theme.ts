import { Theme } from "@/features/theme/themeSlice";

export function applyTheme(theme: Theme) {
    const root = window.document.documentElement; // <--- grabs the HTML tag on the webpage i.e <HTML></HTML>.
  
    root.classList.remove('light', 'dark'); // <--- ensures the HTML tag has no class of light or dark when -
                                            // -the function "appyTheme()" is triggered.                                                   
  
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)') //this browser API checks the 'prefers-color-scheme' media query for the 'dark property!
      .matches  ? 'dark' : 'light'; // if the above is true ,then theme is set to 'dark' else it is set to 'light'.
  
      root.classList.add(systemTheme); // HTML tag is given the theme specified
      return;
    }
  
    root.classList.add(theme); // in case the theme is not on 'system' apply the theme specified.
}
// Apologies if the comments are a bit redunant or 'dummed down'. i am trying to understand