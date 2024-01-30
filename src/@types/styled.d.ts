import "styled-components";

import { defaultTheme } from "../styled/theme/default";

type themeType = typeof defaultTheme

declare module 'styled-components'{

    export interface DefaultTheme extends themeType {}
}