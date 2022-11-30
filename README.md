In the project directory, you can run:

### 1

config eslint anf prettier
create .editorconfig , .prettierignore
npm i eslint-plugin-prettier
npm i eslint-config-prettier
config for package.json : not DONE
create assets folder

### 2: nomalize.css and global style

npm install normalize.css

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 3: landing page

- zome level 175
- install markdown preview extenstion
- get something on screen
  react router and styled component right after
- create gages directory in the source
- for now Landing.js
- create component ( snippet extenstion)
- setup basic retur

### 4: landing structute

- Tip : get dums text : https://hipsum.co/
  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 5: styled comppnent - Basic setup

- Css in js
- styled Component
- have logic and styles in component
- no name collision
- apply js logic
  npm i styled-components
  vscode-styled-components

### 6: styled comppnent - Wrap Component

- keep in mind that only responsible for styling components
- wrappers folder in assets folder

### Bonus:

- [Coll Image](https://undraw.co/)
- tách file index.js trong folder component dùng để tránh import nhiều trong file tổng , tách những file nhỏ ra để dễ quản lý hơn

### `npm run eject`

### 7: setup Pages

- create Error , Register , Dashboard Pages
- basic return
- create index.js
- import all the pages
- export one py one
- basically the same as in components
- import App.js

### 8: React Router V6

- npm install react-router-dom@6
- setup Routes vs route for app.js
- connect button register to link

### 9: Error Pages

- create Error Pages

### 10: Create register page

- create Register Pages
- apply react-hooks-form ( in future versions)

### 10.1: Create FormRow.js

- create FormRow.js
- Separate component to reuse

### 10.2: Handle change and empty value

- apply Dynamic Object K ey

### 10.2: React Toastify

- npm i react-toastify
- apply Dynamic Object K ey

### 11: User Slice setup

- npm i @reduxjs/toolkit
- config store, userSlice
- create UserSlice

### 12: RegisterUser , LoginUser, Placeholder

- setup UserSlices
- create acction in Slice

### 13: HTTP Methods

- GET, POST, PUT, DELETE
- npm i axios

### 14: API

- root URL -https://course-api.com/
- https://jobify-prod.herokuapp.com/api/v1/toolkit
- https://node-course-jobs-api.onrender.com/api-docs/#/

### 15: Custom Axios Instance

- untils/axios.js
- root URL -https://course-api.com/
- https://jobify-prod.herokuapp.com/api/v1/toolkit
- https://node-course-jobs-api.onrender.com/api-docs/#/

### 16: Programmatically Navigate To Dashboard

- add navigate when user register or login successfully

### 17: Setup Dashboard Pages

- remove Dashboard.js
- create Dashboard folder
- create stats, Profile, Addjob, AllJob, ShareLayout
- create index.js and setup import and export

### 18: React Icons

- npm i react-icons

### 19: Navbar Setup

- Navbar.js

### 20: Toggle Dropdown

- setup dropdown Logout

### 21: Restrict Access

- create ProtectedRoute page

### 22: Small Sidebar - Setup

- setup SmallSidebar.js

### 23: Setup link

- setup SmallSidebar.js

### 24: Navlink component

- create component/Navlinks.js

### 25: Bigsidebar component

- setup bigsidebar.js

### BONUS Fuction :

- [Debounce](https://www.joshwcomeau.com/snippets/javascript/debounce/)

### 26: Profile User Profile

- setup page profile.js
- create action
- create update userSlice

### 27: Refactor userSlice

- move userSlice to userThunk : chia nho file , apply method DRY

### BONUS: GIT cherry-pick / GIT merge

- successfully

### 28: Job Slice

- add features jobSlice

### 29: AddJob.js structure

- add input to page addjob

### 30: AddJob.js Selection

- add input to selection

### 30: AddJob.js Selection handleChange Reducer

- add handleChange in reducer

### 31: Change location

- change location user profile page to filed addjob.js

### 32: logout status

- add message when logout was successful

### 33: All jobs

- config allJobsSlice.js
- create thunks, and action

### 34: Structure all Jobs

- config allJobsSlice.js
- create thunks, and action
- create
- component/SearchContainer.js
- component/JobsContainer.js
- component/Job.js
- import/Export.js

### done Project
