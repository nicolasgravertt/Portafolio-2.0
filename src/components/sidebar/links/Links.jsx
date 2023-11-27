const Links = () => {
  const items = ["Home", "Servicios", "Portafolio", "Contacto"];

  return (
    <div className="links">
      {items.map((item, i) => (
        <a key={i} href={`#${item}`}>{`${item}`}</a>
      ))}
    </div>
  );
};

export default Links;
