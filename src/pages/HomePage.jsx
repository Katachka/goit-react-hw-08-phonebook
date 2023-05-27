const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 900,
    letterSpacing: 2,
    marginBottom: 20,
    color: 'var(--accent-bg-color)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook</h1>
      <p>Let's enjoy this awesome app!🤸‍♂️</p>
    </div>
  );
}
