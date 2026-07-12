import { Link } from "react-router-dom";

function Footer() {
  // Footer Links
const footerLinkSections = [
    {
      id: crypto.randomUUID(),
      title: "SITEMAP",
      links: [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Account", href: "/account" },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "RESOURCES",
      links: [
        { name: "GitHub", href: "https://github.com/" },
        { name: "LinkedIn", href: "https://linkedin.com/" },
        { name: "Twitter", href: "https://twitter.com/" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "LEGAL",
      links: [
        { name: "Shipping", href: "/terms" },
        { name: "Contact", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ]
  return (
  <>
    <footer className="w-full py-20 bg-[#131313] border-t border-[#414755]">
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-10">
        
        <div className="w-full flex max-md:flex-col justify-between gap-12">
          <div className="flex-2 flex flex-col gap-6">
            <h2 className="text-2xl text-primary font-bold cursor-pointer">
              Tech Store
            </h2>
            <p className="text-[#bbc6d7]">
              Elevating the modern workspace with curated, high-performance technology.
            </p>
            <div className="text-on-surface-variant flex gap-4">
              <a href="">
                <span className="material-symbols-outlined p-2.5 bg-surface-container-high rounded-lg hover:bg-surface-container-highest">link</span>
              </a>
              <a href="">
                <span className="material-symbols-outlined p-2.5 bg-surface-container-high rounded-lg hover:bg-surface-container-highest">person</span>
              </a>
              <a href="">
                <span className="material-symbols-outlined p-2.5 bg-surface-container-high rounded-lg hover:bg-surface-container-highest">share</span>
              </a>
            </div>
          </div>

          {
            footerLinkSections.map(linkSection => {
              return (
                <div key={linkSection.id} className="flex-1">
                  <h3 className="mb-5 text-sm text-on-surface font-bold">{linkSection.title}</h3>
                  <ul className="flex flex-col gap-4">

                    {
                      linkSection.links.map(link => {
                        return (
                        <li key={linkSection.id + "-" + link.name}>
                          <Link className="text-[#bbc6d7] transition-all duration-200 hover:text-primary cursor-pointer" to={link.href}>{link.name}</Link>
                        </li>
                        )
                      })
                    }

                  </ul>
                </div>
              )
            })
          }

        </div>

        <div className="w-full border-t border-[#414755]"></div>
        <div className="flex max-md:flex-col max-md:items-center max-md:gap-4 justify-between text-sm font-medium">
          <p className="text-[#bbc6d7]">
            © 2026. All rights reserved.
          </p>
          <p className="text-[#bbc6d7] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#bbc6d7]! select-none">code</span> Built with Passion
          </p>
        </div>

      </div>
    </footer>
  </>
  );
}

export default Footer;