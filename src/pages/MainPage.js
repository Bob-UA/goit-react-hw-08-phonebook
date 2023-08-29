import css from '../components/App.module.css'

function MainPage() {
    return (
      <div className={css.pageContainer}>
        <h1 className={css.title}>Phonebook project.</h1>
        <p>Welcome to the Phonebook project. </p>
        <div className={css.flexContainer}>
          <p>Created on</p>{' '}
          <div className={css.reactIconContainer}></div>
          <p>React and</p>
          <div className={css.reduxIconContainer}></div> <p>Redux toolkit.</p>
        </div>
        <div className={css.authorContainer}>
          <p>By Oleksandr Shkut.</p>
          <a href="https://www.linkedin.com/in/oleksandr-shkut/">
            <div className={css.linkedinIcon}></div>
          </a>
        </div>
      </div>
    );
}

export default MainPage;