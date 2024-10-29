//Form.module.css
import styles from "./Form.module.css"
const Header = () => {
  const isLogin = true;
  return (
    <header className={`${styles.container}`}>
      {isLogin ? (
        <div>
            <h1>Dashboardn Page</h1>
          <button type="button">Dashboard</button>
        </div>
      ) : (
        <div>
        <h1>Login Page</h1>
          <button type="button">Login</button>
        </div>
      )}
      {isLogin && <button>Cart</button>}
    </header>
  );
};
export default Header;
