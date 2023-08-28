import css from '../components/App.module.css'

function MainPage() {
    return (
      <div className={css.pageContainer}>
        <h1 className={css.title}>Phonebook project.</h1>
        <p>Welcome to the Phonebook project, which is based on React.</p>
        <span>
          Created by Oleksandr Shkut. For reaching out, please use{' '}
          <a href="https://www.linkedin.com/in/oleksandr-shkut/">Linkedin</a>
        </span>
      </div>
    );
}

export default MainPage;