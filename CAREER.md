# Career Information Integration Plan

## Objective
Add comprehensive career information from LinkedIn to the blog website.

## LinkedIn Profile
- URL: https://www.linkedin.com/in/seon-woo-kim-53b6481ba/

---

## Information to Extract from LinkedIn

### 1. Work Experience
- Company names
- Job titles
- Employment periods (start/end dates)
- Key responsibilities and achievements
- Technologies used

### 2. Education
- Universities/Institutions
- Degrees and majors
- Graduation dates
- Notable achievements or coursework

### 3. Skills & Endorsements
- Technical skills
- Soft skills
- Certifications

### 4. Projects (if listed)
- Project names and descriptions
- Technologies and outcomes

---

## Implementation Options

### Option A: Dedicated Career Page (Recommended)
Create a new page at `_pages/career.md` with:
- Timeline-style work experience
- Education section
- Skills showcase
- Add to navigation

**Pros**: Clean separation, dedicated space for detailed info
**Cons**: Additional page to maintain

### Option B: Expand About Page
Enhance the existing `_pages/about.md` to include:
- Career timeline section
- Detailed work history

**Pros**: All personal info in one place
**Cons**: Page may become too long

### Option C: Both
- Keep About page concise with summary
- Link to detailed Career page

---

## Implementation Steps

### Phase 1: Data Collection
- [ ] Fetch LinkedIn profile content
- [ ] Extract and organize information
- [ ] Verify accuracy with user

### Phase 2: Design
- [ ] Choose page structure (Option A, B, or C)
- [ ] Design timeline/layout style
- [ ] Ensure mobile responsiveness

### Phase 3: Development
- [ ] Create/update page file(s)
- [ ] Add necessary styling (if needed in `_sass/`)
- [ ] Update navigation in `_data/` or `_config.yml`

### Phase 4: Testing
- [ ] Build site locally (`bundle exec jekyll serve`)
- [ ] Verify all content displays correctly
- [ ] Check responsive design

### Phase 5: Deployment
- [ ] Commit changes
- [ ] Push to GitHub
- [ ] Verify on live site

---

## Suggested Page Structure (Option A)

```markdown
---
title: "Career"
layout: page
permalink: /career/
---

## Professional Experience

### [Job Title] @ [Company Name]
**[Start Date] - [End Date]** | [Location]

- Key achievement or responsibility
- Technologies: [Tech stack]

---

## Education

### [Degree] in [Major]
**[University Name]** | [Graduation Year]

---

## Skills

**Languages**: ...
**Frameworks**: ...
**Tools**: ...
**Cloud/DevOps**: ...

---

## Certifications
- [Certification Name] - [Year]
```

---

## Navigation Update

Add to `_data/navigation.yml` (or create if doesn't exist):
```yaml
- title: Career
  url: /career/
```

---

## Notes
- Maintain consistent styling with existing pages
- Keep content professional and concise
- Update periodically as career progresses