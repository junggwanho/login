import './App.css';
import styles from './App.less';


function App() {
  return (
    <div>
      <div className="login-page" ng-app="">
        <div class="login-content login-content-signin" ng-hide="showSignIn">
          <div>
            <h2>Log in</h2>
            <form class="wrapper-box" role="form" ng-submit="login()">
              <input type="email"
                ng-model="email"
                class="form-control form-control-email"
                placeholder="Email address"
                required />
                <input type="password"
                  ng-model="password"
                  class="form-control form-control-password"
                  placeholder="Password"
                  required />
                  {/* <a class="outer-link pull-left" href="#/forgot">Forgot Password</a> */}
                  <button type="submit" class="btn btn-submit btn-default pull-right">Log in</button>
                </form>
              </div>
          </div>

          <div class="login-content login-content-signup ng-hide" ng-show="showSignIn">
            <div>
              <h2>Sign Up</h2>
              <form class="wrapper-box" role="form" ng-submit="register()">
                <input type="text"
                  ng-model="username"
                  class="form-control form-control-username"
                  placeholder="Username"
                  required />
                  <input type="email"
                    ng-model="email"
                    class="form-control form-control-email"
                    placeholder="Email address"
                    required />
                    <input type="password"
                      ng-model="password"
                      class="form-control form-control-password"
                      placeholder="Password"
                      required />
                      <button type="submit" class="btn btn-submit btn-default pull-right">Sign up</button>
                    </form>
                  </div>
                </div>



                <div class="login-switcher">
                  <div class="login-switcher-signin" ng-show="showSignIn">
                    <h3>Have an account?</h3>
                    <button ng-click="showSignIn=false">Login</button>
                  </div>
                  <div class="login-switcher-signup" ng-hide="showSignIn">
                    <h3>Don't have an account?</h3>
                    <button ng-click="showSignIn=true">Sign Up</button>
                  </div>
                </div>


            </div>
          </div>
          );
}

          export default App;
