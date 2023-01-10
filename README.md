# MealsToGo-React-Native

Unable to resolve dependency tree error when installing npm packages
When trying to install the npm packages using npm i command, I am getting the following exception: dependency tree error

delete package-lock.json and try this....

=>Try to install it with this command

-------------------npm install --legacy-peer-deps--------------------

and than start your project again.
npm run ios
npm run android
