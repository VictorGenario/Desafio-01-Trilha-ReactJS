//import { render } from 'react-dom'

import { App } from './App'

//render(<App />, document.getElementById('root'))


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement); // createRoot(container!) if you use TypeScript
root.render(<App />);