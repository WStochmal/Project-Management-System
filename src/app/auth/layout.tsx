import styles from "../../styles/modules/auth-layout.module.css";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.AuthLayout}>
      <div className={styles.AuthLayoutContent}>{children}</div>
      <div className={styles.AuthLayoutSideBg}></div>
    </div>
  );
};

export default AuthLayout;
