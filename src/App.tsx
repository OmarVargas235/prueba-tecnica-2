// 1.- librerias
import { Suspense, lazy, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

// 2.- redux
import { setActiveDark, IInitState } from './redux/reducers/reducerTheme';
import { RootState } from './redux/store';

// 3.- theme
import { themeLight, themeDark } from './theme/theme';

// 4.- components
import Spinner from "./layauts/spinner/Spinner";

const Navbar = lazy(async () => await import('./main/navbar'));
const Banner = lazy(async () => await import('./main/banner'));
const Events = lazy(async () => await import('./main/events'));
const Crew = lazy(async () => await import('./main/crew'));
const Whatsnew = lazy(async () => await import('./main/whatsnew'));
const Memories = lazy(async () => await import('./main/memories'));
const Sountrack = lazy(async () => await import('./main/sountrack'));
const JoinUs = lazy(async () => await import('./main/joinus'));

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;

function App(): JSX.Element {

    const dispatch = useDispatch();
    const { isDark } = useSelector<RootState, IInitState>(state => state.theme);

    useEffect(() => {

        const getLS = window.localStorage.getItem('theme') ?? 'false';
        const isDark = JSON.parse(getLS);

        dispatch(setActiveDark(isDark));

    }, []);

    return <Suspense fallback={<Spinner isLoading={true} />}>

        <GlobalStyle />

        <ThemeProvider theme={isDark ? themeDark : themeLight}>
            <Navbar />
            <Banner />
            <Events />
            <Crew />
            <Whatsnew />
            <Memories />
            <Sountrack />
            <JoinUs />
        </ThemeProvider>
    </Suspense>;
}

export default App;