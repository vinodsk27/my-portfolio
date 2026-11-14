export const blogPosts = [
  {
    slug: "responsive-wordpress-checklist",
    category: "WordPress",
    title: "A practical checklist for responsive WordPress websites",
    excerpt: "A simple way to check that a WordPress website feels clear and usable on phones, tablets and desktop screens.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    intro: "Responsive design is more than shrinking a desktop page. The content order, navigation, images and controls all need to make sense on a small screen.",
    sections: [
      { heading: "Start with the content order", paragraphs: ["Put the most useful information first. Long introductions and oversized banners can push the actual service or product too far down the page."] },
      { heading: "Make navigation easy to use", paragraphs: ["Keep menus short, label links clearly and give tap targets enough room. Check that the menu can be opened, used and closed with one hand."] },
      { heading: "Check real screen widths", paragraphs: ["Preview narrow phones, larger phones, tablets and wide screens. Look for horizontal scrolling, clipped headings, cramped forms and buttons that are difficult to tap."], points: ["Keep paragraph measure comfortable", "Use responsive image sizes", "Check forms and menus on touch screens"] },
      { heading: "Review the whole page", paragraphs: ["A responsive check should include footers, cards, tables, cookie notices and embedded content, not only the hero section."] },
    ],
  },
  {
    slug: "wordpress-speed-basics",
    category: "Performance",
    title: "Simple ways to improve WordPress website speed",
    excerpt: "A few practical checks that can make a WordPress site feel lighter without changing its design.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    intro: "Speed work is easiest when you measure first, make one change at a time and check the same pages again. Start with the biggest assets and the parts of the site visitors use most.",
    sections: [
      { heading: "Resize images before uploading", paragraphs: ["Use image dimensions that fit the displayed layout and choose a compressed format supported by your setup. Large, full-resolution images are often heavier than a page needs."] },
      { heading: "Review plugins and themes", paragraphs: ["Remove plugins and themes that are no longer used. For active tools, check whether they add scripts or styles to pages that do not need them."] },
      { heading: "Use caching carefully", paragraphs: ["Caching can reduce repeated work, but it should be configured for the site’s actual setup. After a change, test logged-in pages, forms and shopping flows as well as the homepage."] },
      { heading: "Measure again", paragraphs: ["Compare the same page before and after each change. Keep notes so you know which adjustment helped and which one had no visible effect."] },
    ],
  },
  {
    slug: "shopify-or-woocommerce",
    category: "E-commerce",
    title: "Shopify or WooCommerce: questions to ask before choosing",
    excerpt: "Compare the day-to-day needs of a store before committing to an e-commerce platform.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    intro: "Both Shopify and WooCommerce can support online stores. The better fit depends on how you want to manage the store, which integrations you need and how much control you want over the site.",
    sections: [
      { heading: "Consider who will maintain it", paragraphs: ["Think about who will update products, handle content changes, troubleshoot issues and manage the technical setup after launch."] },
      { heading: "List the integrations you need", paragraphs: ["Write down payment methods, shipping tools, inventory sources, marketing services and accounting systems before choosing. Check that the connections you rely on are supported."] },
      { heading: "Plan the customer journey", paragraphs: ["Test product discovery, cart, checkout, confirmation emails and mobile usability. The full purchase flow matters more than a feature checklist alone."] },
      { heading: "Choose for your current team", paragraphs: ["Compare ongoing cost, flexibility and maintenance against your store’s real needs. A clear plan for updates and support helps whichever platform you select."] },
    ],
  },
  {
    slug: "clean-tailwind-css-practices",
    category: "Frontend",
    title: "Practical tips for clean and maintainable Tailwind CSS",
    excerpt: "How to organize utility classes, build reusable patterns and keep your styles maintainable as your codebase grows.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    intro: "Tailwind CSS makes styling rapid, but without structure, templates can quickly get cluttered with lengthy class strings. A few disciplined habits keep your UI code clean, readable and easy to maintain.",
    sections: [
      {
        heading: "Extract repeating patterns into components",
        paragraphs: [
          "Avoid copying long utility class strings across different files. When a button, card, badge or form input appears more than once, create a dedicated component or reusable template partial.",
          "This ensures consistency across your entire design and makes future style updates a one-line change."
        ],
      },
      {
        heading: "Maintain consistent class ordering",
        paragraphs: [
          "Adopt a predictable sequence for utility classes: layout (display, position), spacing (margin, padding), sizing (width, height), typography (font, text color), and finally states (hover, focus, transitions).",
          "Automated sorting tools like the Prettier plugin for Tailwind CSS make this effortless across your development workflow."
        ],
      },
      {
        heading: "Leverage theme tokens instead of arbitrary values",
        paragraphs: [
          "While arbitrary values like w-[347px] or bg-[#1a2b3c] are occasionally useful, leaning on design tokens ensures unified spacing, typography and brand colors across every breakpoint."
        ],
        points: [
          "Group related utilities logically",
          "Keep responsive breakpoints in ascending order (sm, md, lg, xl)",
          "Combine clsx and tailwind-merge for conditional classes"
        ],
      },
      {
        heading: "Design with state and accessibility in mind",
        paragraphs: [
          "Never overlook keyboard navigation and focus rings. Always pair hover states with focus-visible styles so interactive elements remain clear and accessible to every visitor."
        ],
      },
    ],
  },
];
