import { Excel } from './components/excel/Excel';
import './scss/index.scss';
import { Header } from '@/components/header/Header';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { Formula } from '@/components/formula/Formula';
import { Table } from '@/components/table/Table';
import { createStore } from './core/createStore';
import { rootReducer } from './state/rootReducer';
import { debounce, storage } from './core/utils';
import { initialState } from './state/initialState';

const store = createStore(rootReducer, initialState);

const stateListener = debounce((state) => {
  console.log('App', state);
  storage('state', state);
}, 500);

store.subscribe(stateListener);

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
});
excel.render();
