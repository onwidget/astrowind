import { Header, styles, theme } from '@hackinggrowth/hui';

const { ThemeProvider } = styles;

export function SampleBox({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}) {
    return <ThemeProvider theme={theme.HKG.theme}>
        <Header title={title} />
        {children}
    </ThemeProvider>;
}
