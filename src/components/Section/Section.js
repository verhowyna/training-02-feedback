export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 title={title}>{title}</h2>
      {children}
    </section>
  );
};
