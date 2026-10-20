# Design System — Purbo Jatmiko Portfolio

**Version:** 1.0
**Direction:** Minimalist Editorial / Technical Portfolio
**Audience:** Recruiters, developers, lecturers, and potential collaborators
**Primary language:** Indonesian

## 1. Design principles

### Purpose

This design system defines a personal, credible portfolio for an Information Systems student developing practical software engineering skills.

The website should communicate personality, real work, technical curiosity, and attention to detail.

### Core principles

1. **Content before decoration.** Projects and their implementation details must receive more attention than visual effects.
2. **Personal, not generic.** Content must reflect the owner's real academic background, work, and current skill level.
3. **Editorial hierarchy.** Use typography, whitespace, alignment, and image composition to guide the reader.
4. **Restraint.** Every visual effect must have a clear purpose.
5. **Consistency without monotony.** Reuse design tokens while allowing featured projects and content sections to have appropriate visual variation.
6. **Honest presentation.** Never invent experience, metrics, achievements, technologies, or testimonials.

## 2. Color palette

Use CSS custom properties as the single source of truth.

```css
:root {
  /* Backgrounds */
  --color-bg: #080B10;
  --color-surface: #10151D;
  --color-surface-raised: #171F2A;

  /* Borders */
  --color-border: #27313D;
  --color-border-subtle: #1C2530;

  /* Text */
  --color-text-primary: #F0F3F6;
  --color-text-secondary: #A8B2C0;
  --color-text-muted: #7E8998;

  /* Accent */
  --color-accent: #54C7D8;
  --color-accent-hover: #78D8E5;
  --color-accent-subtle: #142D35;

  /* Semantic */
  --color-success: #86C9A0;
  --color-error: #F08D91;

  /* Focus */
  --color-focus: #78D8E5;
}
```

### Color rules

- Use `--color-bg` for the main page background.
- Use `--color-surface` only where grouping improves comprehension.
- Reserve `--color-surface-raised` for intentional emphasis, dropdowns, or selected states.
- Use the accent color for links, small highlights, active states, and primary actions.
- Keep primary text highly readable against the background.
- Use muted text for secondary metadata, not essential information.
- Borders should define structure rather than decorate every element.

### Forbidden color patterns

- Large cyan or blue radial gradients.
- Neon outlines around every component.
- Multiple competing accent colors.
- Rainbow particle backgrounds.
- Colored shadows used as a substitute for visual hierarchy.

The portfolio must remain visually effective when all decorative effects are removed.

## 3. Typography

### Typeface

Preferred combination:

- **Headings:** Manrope, weight 600–700.
- **Body:** Inter, weight 400–500.
- **Technical metadata:** Use the body typeface or an existing monospace font only when appropriate.

Load fonts through the existing font setup if possible. If external font loading is unavailable, use a sensible system fallback.

```css
:root {
  --font-heading: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, monospace;
}
```

Typography must establish hierarchy through size, weight, line-height, and width rather than decorative labels.

### Type scale

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: clamp(2.5rem, 5vw, 4.5rem);
}
```

### Usage

| Element             | Style                    |
| ------------------- | ------------------------ |
| Hero heading        | 40–68px, semibold/bold   |
| Section heading     | 30–40px, semibold        |
| Project heading     | 21–28px, semibold        |
| Body copy           | 15–17px, regular         |
| Project description | 15–16px, line-height 1.7 |
| Metadata            | 12–14px                  |
| Navigation          | 14–16px                  |

Use responsive `clamp()` values where appropriate.

### Typography rules

- Body line-height: approximately 1.65–1.8.
- Heading line-height: approximately 1.1–1.25.
- Keep paragraph widths comfortable for reading.
- Avoid oversized headings that wrap awkwardly on mobile.
- Avoid excessive uppercase text and letter spacing.
- Do not use more than two primary font families.
- Avoid using thin text weights for important information.

## 4. Layout and spacing

Use a consistent spacing scale.

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  --container-width: 1120px;
  --page-gutter: clamp(20px, 5vw, 64px);
  --section-spacing: clamp(72px, 10vw, 128px);
}
```

### Layout rules

- Center the main content within a maximum width of approximately 1120px.
- Maintain consistent page gutters.
- Use generous separation between major sections.
- Use smaller spacing within related content groups.
- Align section headings, descriptions, and project details intentionally.
- Avoid excessive empty space that pushes meaningful content below the fold.
- Do not wrap the entire page inside one large rounded container.
- Prefer simple grids, editorial columns, and structured lists over repetitive card layouts.

### Responsive breakpoints

Use these as guidelines, not rigid constraints:

- Mobile: below 640px.
- Tablet: 640–1023px.
- Desktop: 1024px and above.

The design must adapt to content and available width, not just predefined device categories.

## 5. Shape, borders, and surfaces

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --border-width: 1px;
}
```

### Rules

- Prefer square or subtly rounded corners for most structural elements.
- Use larger radii selectively for photographs or media where they improve the composition.
- Do not give every section, badge, button, and card the same rounded shape.
- Avoid pill-shaped labels unless the element genuinely represents a compact status or category.
- Use shadows sparingly.
- Do not use glassmorphism as a default surface treatment.

## 6. Navigation

Create a clear and understated navigation system.

Required sections:

- Home
- About Me
- Projects
- Experience
- Contact

Rules:

- Use text-based navigation with sufficient spacing.
- Use an understated active indicator, such as accent-colored text or a subtle underline.
- Avoid glowing pill-shaped navigation items.
- A sticky header is optional; implement it only if it improves navigation.
- Ensure keyboard accessibility and visible focus states.
- Prevent sticky navigation from obscuring section headings.
- On mobile, use a simple accessible menu when necessary.

## 7. Home / hero

The hero should immediately answer three questions:

1. Who is this person?
2. What are they learning or building?
3. Where can I see their work?

Required content:

- Name: Purbo Jatmiko.
- Academic identity: D3 Sistem Informasi, Telkom University Bandung.
- A short and honest description of interests and current work.
- A prominent link to Projects.
- A secondary link to Contact or GitHub, depending on available data.
- An authentic profile photograph.

Suggested content direction:

"Mahasiswa Sistem Informasi yang sedang membangun aplikasi web, mempelajari pengelolaan database, dan mengembangkan ide melalui proyek individu maupun kelompok."

This is a starting point, not mandatory copy. Adapt it to fit the final composition.

Do not use generic slogans such as "Crafting Clean Code & Scalable Solutions."

The hero may use a two-column layout on desktop and a single-column layout on mobile. Choose the composition that best balances the profile image and introduction.

## 8. About Me

Use concise paragraphs with natural Indonesian language.

Include:

- Academic background.
- Technical interests.
- Experience gained through academic and personal projects.
- Approach to learning and problem-solving.

Avoid repeating the hero introduction verbatim.

Do not turn this section into a list of generic personality traits or a collection of decorative icon cards.

## 9. Projects

Projects are the primary evidence of technical ability.

### Project hierarchy

Use a featured project followed by supporting projects when the available material supports that hierarchy.

A project entry may contain:

- Project name.
- Purpose or problem addressed.
- Actual role and scope.
- Technologies used.
- Real screenshot or application preview.
- Repository link.
- Working demo link, if available.
- Important implementation detail or learning outcome.

### Presentation

- Prioritize real screenshots over illustrations or placeholder mockups.
- Let screenshots retain enough space to communicate what the application does.
- Vary project composition only when there is a meaningful content reason.
- Use consistent metadata and typography across projects.
- Avoid a repetitive three-column card grid as the default.
- Do not use fake statistics, fabricated outcomes, or unverified user counts.

### Missing information

Never fabricate project content.

If a project has no live demo, provide the repository link instead.

If a mobile application cannot run inside the website, use genuine screenshots and link to its repository.

If a project's role, stack, or contribution is unclear, inspect the source code or preserve an editable field for confirmation.

## 10. Experience

Represent the owner's actual experience accurately.

Possible categories include:

- Academic projects.
- Personal projects.
- Verified campus organization activities.

For each entry, include a meaningful description of the work, actual contribution, and technologies where verified.

Do not fabricate internships, employers, job titles, achievements, or dates.

Do not create a fake professional timeline merely to fill the section.

A simple chronological list is preferable to a timeline full of decorative lines, icons, and oversized numbers.

## 11. Contact

Make it easy for visitors to get in touch.

Use verified information only:

- Email.
- GitHub.
- LinkedIn, if configured.
- Other existing professional profiles.

Rules:

- Provide clear text links.
- Make interactive elements accessible by keyboard.
- Use a genuine `mailto:` link when appropriate.
- Do not introduce a form that appears to submit successfully without a working backend.
- Avoid generic contact-card grids when simple links communicate the information better.

## 12. Buttons and links

Use clear visual hierarchy.

- Primary action: solid accent background with readable dark text, where contrast permits.
- Secondary action: understated border or text link.
- Inline links: accent color with a clear hover and focus state.
- Destructive actions are not needed for the public portfolio.

Buttons should be compact, readable, and proportional to their importance.

Avoid oversized CTA buttons, excessive icons, and decorative arrow animations.

Every control must perform its advertised action.

## 13. Motion and interaction

Motion intensity: low.

Use animation only to improve feedback, orientation, or comprehension.

Allowed:

- Short color transitions.
- Subtle image or link feedback.
- Small, restrained entrance transitions when they improve the experience.

Avoid:

- Constant floating elements.
- Animated particle backgrounds.
- Cursor-following effects.
- Excessive parallax.
- Scroll-triggered animation on every component.
- Large animation libraries for simple effects.

Respect `prefers-reduced-motion`.

Core content and navigation must remain usable without animation.

## 14. Iconography and imagery

- Reuse existing project screenshots and personal photographs.
- Use a consistent icon library already installed in the project.
- Use icons only when they clarify meaning or identify a recognizable service.
- Avoid emoji as the default interface icon system.
- Do not use icons as substitutes for actual project content.
- Do not generate fake application screenshots when genuine assets exist.

## 15. Accessibility

- Use semantic HTML landmarks.
- Maintain readable text contrast.
- Provide meaningful image alt text.
- Label form fields properly.
- Ensure visible keyboard focus states.
- Support keyboard navigation.
- Avoid communicating state through color alone.
- Ensure touch targets are comfortable on mobile.
- Respect reduced-motion preferences.

Target WCAG 2.2 AA where practical.

## 16. Engineering constraints

- Preserve the current framework and routing.
- Reuse working components and dependencies where appropriate.
- Centralize tokens in CSS variables or the existing theme system.
- Avoid unnecessary packages.
- Avoid duplicating component styles.
- Keep content and presentation reasonably separated.
- Ensure responsive images and layouts.
- Prevent horizontal overflow.
- Check browser console errors and build output.
- Do not claim that functionality works unless it has been tested.

## 17. Anti-AI-slop checklist

Before considering the redesign complete, verify every item.

- [x] The design has a clear visual identity related to its owner.
- [ ] The hero communicates a real identity rather than a generic slogan.
- [ ] Real projects receive more emphasis than decorative elements.
- [x] The particle background and excessive neon effects have been removed or substantially reduced.
- [ ] Pill-shaped elements are not used everywhere.
- [ ] Not every section is enclosed in a card.
- [ ] Typography establishes a clear hierarchy.
- [ ] Spacing follows a consistent scale.
- [ ] Accent colors are used sparingly.
- [ ] Project images and links are authentic.
- [ ] Experience is honest and appropriate for a student.
- [ ] Contact links work.
- [ ] Mobile layouts are carefully composed.
- [ ] Motion is restrained and accessible.
- [ ] No placeholder copy, fake statistics, or dead links remain.
- [ ] Existing functionality has been preserved or deliberately improved.
- [ ] The project builds successfully, or any blocking issue is documented.

## Final principle

Do not optimize this portfolio for visual spectacle.

Optimize it for clarity, credibility, personality, and evidence of real work.

A successful design should feel like a carefully considered portfolio built by a real person, not a generic template with more sophisticated effects.
