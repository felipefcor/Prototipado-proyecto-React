import { render } from "react-dom";
import React from "react";
/* import './index.css'; */
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faForward} from '@fortawesome/free-solid-svg-icons'
import { faBackward} from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faCog)
library.add(faSearch)
library.add(faForward)
library.add(faBackward)
library.add(faTimes)

render (<App />, document.querySelector("#app"));