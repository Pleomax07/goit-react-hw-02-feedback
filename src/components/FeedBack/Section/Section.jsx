import PropTypes from 'prop-types';
import css from './Section.module.css'

 const Section = ({ title, children }) => {
  return (
    <>
      <section className={css.section} title={title}>{children}</section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
export default Section
