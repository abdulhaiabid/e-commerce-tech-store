import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <div className="mb-8 hidden sm:flex sm:items-center sm:gap-2">
      <Link to="/" className="text-sm text-[#c1c6d7] hover:text-[#adc6ff]">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c1c6d7]">chevron_right</span>
            {isLast ? (
              <span className="text-sm text-[#c1c6d7]">{name}</span>
            ) : (
              <Link to={routeTo} className="text-sm text-[#c1c6d7] hover:text-[#adc6ff]">
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;