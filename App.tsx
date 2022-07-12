import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';
import Routes from './src/routes/routes';
import { Theme } from './src/templates/theme';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Theme>
        <Routes/>
      </Theme>
    </>
  );
}

