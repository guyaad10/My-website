// What the site's chat knows about Guy. Everything here is copied from the site itself
// (About reply, resume PDF, case studies), so the chat never needs facts from anywhere else.
// When a case study, the About text or the resume changes, update the matching part here too.

export const ABOUT = `Hey, I’m Guy. I’m a product designer in Tel Aviv.
I didn’t start in tech. I studied architecture at Tel Aviv University, and it taught me to design for the people who’ll actually live in a space, not for the drawing. I took that habit with me when I moved to product design.
My first design job was at 5ive, an agency, where one month I was on hospital wards watching nurses work and the next I was redesigning a system for water utilities. Then I joined Papaya Global, a payroll platform, where I got my first taste of designing for an AI agent.
Today I’m the only designer at DreamHub, an AI-native sales CRM. I talk to customers, design the flows, and lately I open the pull requests myself too.
What ties it all together: I like taking something complicated and making it feel simple to the person using it.
Facts: Tel Aviv. B.Arch, Tel Aviv University. Hebrew and English.
Hobbies and life outside work: not written on the site yet.`;

export const RESUME = `Guy Peretz

www.guyperetz.com

Product Designer,   
B2B SaaS, Complex Systems & AI-Native Experiences

Tel Aviv, Israel

Product Designer with 3+ years of experience designing and shipping complex B2B SaaS

products across CRM, fintech, and healthcare.

WhatsApp

guyaad10@gmail.com

Experienced in end-to-end product design, from discovery and user research through

www.linkedin.com/in/

UX/UI, interaction design, prototyping, design systems, and implementation.  

guy-peretz-8948151b6/

Currently working as the sole designer in an early-stage, AI-native SaaS environment,
partnering directly with founders, Product, and Engineering to turn ambiguous problems
into clear, scalable product experiences.

Skills

Experience

Product Strategy
UX/UI Design

Product Designer · Sole Designer
Dreamhub - B2B AI-Native, Sales CRM

Apr 25- Current

Owned the end-to-end product design process as the company’s sole designer, from
discovery and user research through UX/UI, prototyping, implementation, and QA.

Design to Code

Human-AI Interaction
Cross-functional Collaboration
User Research

Prototyping

Took product features from design to production using AI-assisted and agentic

Interaction Design

workflows, building working implementations, committing code, opening PRs, and

Design System

iterating through Engineering code review.

Web Design

Shaped the product from stealth through launch and adoption by 30+ customers,
defining and evolving its core experiences and workflows.

Partnered directly with founders, Product, Engineering, and Data Science to identify
problems, define solutions, prioritize initiatives, and ship features.

Tools
Figma

Claude Code

GitHub

Lovable

Created and maintained the platform design system, implementing and refining UI

Pendo

Jitter

components to ensure consistency across design and production.

Illustrator & Photoshop

Owned Dreamhub’s brand guidelines and marketing website design, creating visual

Flagsmith

Conducted customer interviews and design partner sessions, translating insights into
product and design decisions.

assets for marketing, sales, and leadership.

Product Designer
Papaya Global - B2B Global Payroll & Payments platform

Nov 24 – Mar 25

Designed product experiences as part of a design team, collaborating with Product
and Engineering from exploration through developer handoff.

Jira

Languages
Hebrew Native
English Professional

Worked on complex product flows involving third-party integrations and early
exploration of an AI Agent experience, translating technical requirements into clear
user flows and interaction patterns.

Education
UX & UI Design

Product Designer
5ive UX - Agency for complex digital products

Nov 23 – Nov 24

Designed B2B and B2C products across web, mobile, and tablet for startups,
enterprises, and public-sector organizations in healthcare and urban infrastructure.

Worked across diverse product contexts, from data-heavy B2B platforms and
operational tools to consumer apps and public digital services.

Took products from early concepts through user research, UX/UI, prototyping, and
implementation, collaborating with client stakeholders and Engineering teams.

Codesigner

2022–2023

B.Arch, Architecture & Design

TAU

2017–2022

Magna Cum Laude`;

export const PAGES = `dreamhub = "DreamHub: AI that shows its work" (case study, 2026)
dh-contracts = "DreamHub: Contract lifecycle" (case study)
lwf = "LWF Observer" (case study, agency work at 5ive: water-utility leak detection)
clalit = "Clalit Innovation: Patient Record" (case study, agency work at 5ive: nurses' patient record)
whatsapp = "WhatsApp Events" (student project, 2023)
offgrid = "Off Grid" (personal project, 2022, trip planner)
headspace = "Clalit × Headspace" (concept project, 2022)`;

export const CASE_STUDIES = `===== CASE dreamhub =====
DreamHub: AI that shows its work
Follow-up to Northwind
Drafted by Dreamer

Hi Marcus, thanks for the time today. As discussed, we'll send the security review by Friday and hold this pricing through Q1.

Our API already supports SSO with Okta, so your team can roll it out on day one.

Call notes
CRM record
Not grounded
Created by Dreamer · for Dana
DreamHub
AI that shows its work

Helping sales reps trust Dreamer, the AI that writes their emails, fills their CRM and scores their deals, by always showing what it did and why.

Role
Product designer, sole designer
Company
DreamHub
Year
2026
Overview
Solution
Research
Design process
Takeaways
01
Overview
The project

DreamHub is an AI-native sales CRM. Its AI, Dreamer, drafts emails, creates tasks, fills in records and judges the health of deals.

The problem

Every CRM now ships AI that writes, fills and scores. The output is fast, but the person acting on it cannot check it: they send, accept or trust it blind. The risk is not that the AI is sometimes wrong. It is that nobody can tell when.

At DreamHub the stakes are higher. Dreamer does not just suggest: it fills qualification fields, creates tasks and drafts follow-ups with no rep input expected. The more the AI does on its own, the more the person needs to see what it did.

01
Drafts that overpromise

An AI email can read perfectly and still commit the rep to a date, a discount or a feature nobody agreed to.

02
Data with no author

When the AI creates tasks and fills in fields, nobody can tell what a person did and what the AI did for them.

03
Scores with no reason

A win probability says a deal is at risk, but not why, so a manager cannot coach on it and a rep cannot fix it.

Role

As DreamHub’s sole product designer I:

Owned the end-to-end design process, from discovery through UX/UI, prototyping, implementation and QA.
Partnered directly with the founders, product and engineering to turn open problems into clear product decisions.
Worked closely with the data science team to shape how Dreamer’s scores, filled fields and confidence show up for sales reps.
Took features from design to production with AI-assisted and agentic tools.

Constraints
01
The model will be wrong sometimes

The design could not assume a perfect model. Reps had to see at a glance which claims Dreamer was less sure of, without reading a percentage on every line.

02
Reps and the AI will disagree

A rep may say a deal has a champion while the calls say otherwise. Dreamer had to show its evidence, not just insist, and the rep had to be able to overrule it.

03
Two readers for every output

A rep acts on it and a manager judges it. Both need to understand the same screen.

04
Same answer, every time

Every DreamHub concept has one fixed meaning, so the AI’s output had to be consistent and traceable back to that definition.

Check these four against the real constraints, and add any from engineering or the model.

02
Solution
The principle

The AI is visible, explainable and accountable, and the human stays the author of record.

DESIGN COMING SOON
Email Drafter: commitment tokens, a flagged claim and the grounding bar
In the Email Drafter, review is the product

The draft arrives already marked up for the rep. Every commitment is an inline token, every capability claim is flagged, and a grounding bar shows where each statement came from.

DESIGN COMING SOON
A task created by Dreamer, with its provenance line
Every task says who made it, and for whom

“Created by Dreamer · for Dana.” Anyone reading the pipeline can tell what a rep did and what the AI did on their behalf.

DESIGN COMING SOON
AI-Autofill: the sample review and the bulk unlock
Autofill earns trust before it acts in bulk

It runs on a sample first. Bulk deployment unlocks only once sample accuracy clears 90%.

DESIGN COMING SOON
AI Deal Score: health level, the four fundamentals and the risks
Deals get a diagnosis, not a probability

One of four health levels, judged on four named fundamentals. Risks, like no executive engagement in three weeks, are listed separately and never silently lower the level.

The four fundamentals

The Deal Score judges every deal on the same four things, drawn from the qualification methods sales teams already use, like MEDDPICC. Each one has a fixed definition, so the same deal always gets the same answer, and a level always says what is there and what is missing.

01
Champion

Someone inside the account is actively pushing the deal forward.

02
Economic buyer

The person who owns the budget is known and involved.

03
Pain and urgency

There is a real problem, and a reason to solve it now.

04
Path to close

The steps to a signature are clear and agreed.

Key decisions

Four decisions shaped the trust layer.

01
Commitments become tokens

Anything the draft promises, like a date, a discount or a deliverable, is an inline token the rep can see and edit before sending.

Why →
Reps skim a draft before they send it. A promise made in the rep’s name has to stand out from the paragraph around it.

02
Name the author and the owner

Dreamer’s work is labelled in words: who created it, and who it is for.

Why →
An AI icon says that AI was involved. A provenance line says who is accountable, which is what a manager reviewing the pipeline needs.

03
Autonomy is earned

Autofill proves itself on a sample before it can run in bulk, and the bulk action stays locked until the sample clears the bar.

Why →
DreamHub’s AI climbs a ladder: capture, analyse, recommend, then act. Each step up has to be earned, because one bad bulk update across thousands of records ends the team’s trust in the feature.

04
Risks never move the level

The level is built from the four fundamentals only. Risks are listed on their own and never silently lower it.

Why →
If a risk quietly pulled the score down, nobody could tell why a deal changed. This way the level always traces back to a fundamental someone can fix.

03
Research
Trust breaks at the moment of action

The problem was never the AI’s output on its own. It was the moment a person had to act on it: send the email, accept the value, believe the score.

Other CRMs show a number, not a reason
S
H
Salesforce and HubSpot

Reps type deal details in by hand. The AI gives back a score from 1 to 99 but never says why, so reps can’t tell what to fix.

A
C
Attio and Clarify

Each team builds its own fields and sales process before the AI can help. Reps get whatever their admin set up, and it varies from team to team.

D
R
Day.ai and Reevo

Reps get good call notes and quick answers. Nobody tells them how healthy a deal is, so they still judge it on gut feel.

D
DreamHub

Reps don’t type anything. The AI fills in the deal from calls and emails, so reps act on information they didn’t write and need to see where it came from.

From DreamHub’s blog

A wrong field is worse than an empty one, because the failure is invisible downstream.

What I learned
01
Reps skim, then send

A draft gets a quick read, not a proofread. Anything that matters has to be visible at a glance.

→ Led to commitment tokens and flagged claims.

02
A wrong claim costs more than a slow draft

Promising a feature the product does not have, or a discount nobody approved, damages the deal and the rep’s credibility.

→ Led to the grounding bar, and flags that ask the rep to confirm.

03
Managers coach on gaps, not numbers

“64%” starts no conversation. “No economic buyer yet” starts the right one.

→ Led to health levels built on named fundamentals.

04
Trust in automation is lost at scale

People forgive one wrong field. They switch a feature off after one bad bulk update.

→ Led to the sample review and the 90% bulk unlock.

Replace these with what you actually heard, with a quote from a rep or manager if you have one.

04
Design process
Replacing the obvious model

Each part of the trust layer started from the model most CRMs use. On the left is the obvious version, and on the right is what we built instead.

THE OBVIOUS MODEL
What most CRMs do
A confidence score on every draft
A sparkle icon on AI content
Autofill on by default, with undo
A win probability, with risks folded in
→
WHAT WE BUILT
The trust layer
Sources for every statement, in a grounding bar
A provenance line: “Created by Dreamer · for Dana”
A sample first, and bulk only after 90% accuracy
Four health levels on four fundamentals, risks listed apart
Trade-offs

Every part of the trust layer cost something. These were the trade-offs worth making.

01
Friction, on purpose

Tokens and flags make sending a little slower. A few seconds of review is cheaper than one wrong promise to a buyer.

02
Value later

The sample gate delays Autofill’s payoff. In return, nobody has to clean up a bad bulk update.

03
Less precise, more useful

Four levels are coarser than a percentage, but each one says what to do next.

Iterations

Early explorations, and what changed after testing with the team.

DESIGN COMING SOON
Early explorations, before and after
05
Takeaways
Outcome

Lessons
01

Trust in AI is built one output at a time. Every draft, task and score has to show what it is based on.

02

The review step is part of the product, not a gate in front of it. What the human checks matters as much as what the AI produces.

03

Autonomy works best when it is earned in steps. Proving accuracy on a sample first made bulk actions something users chose, not something they feared.

04

Explainable means actionable. A judgement is only useful when the person reading it knows what to do next.

What I’d do next
Learn from the review: when reps edit a token or reject a flagged claim, use it so the next draft makes fewer of them.
Ground the Deal Score too: link each fundamental to the call or email that proved it.
Carry the trust layer into customer success, where Dreamer drafts outreach to at-risk accounts and health scores already promise to show which signal moved and why.

Draft ideas. Keep, change or replace them with what is really next.

Next in the conversation
DreamHub: Contract lifecycle

===== CASE dh-contracts =====
DreamHub: Contract lifecycle
Northwind Logistics
Contract CT-2048, 120 seats, $60,480 a year
Active
Overview
Terms History
Documents
Renewal drafted as CT-2311
REF 9C04E2
Starts Jan 2027, a new agreement linked to this one
Added 20 seats, extended to Dec 2026
REF 7F3A21
Jun 2025, by Dana
Price per seat from $38 to $42
REF 51B8D0
Mar 2025, by Dana
Signed: 100 seats, Jan 2025 to Jun 2026
REF 2E61AF
Closed Won, Jan 2025
Closed Won
This deal has a signed contract

Changing the amount to $72,000 means the deal no longer matches CT-2048.

Amend contract
Keep the deal as is
DreamHub
Contract lifecycle

What happens after Closed Won: contracts, amendments and renewals, modelled so the CRM stays honest about what was actually signed.

Role
Product designer, sole designer
Company
DreamHub
Year
2026
Overview
Solution
Research
Design process
Takeaways
01
Overview
The problem

Sales and customer success work in different tools, so every handoff loses something.

Reps close the deal in the CRM. Customer success managers (CSMs) take over in a separate CS tool, a spreadsheet or the billing system. What the customer actually signed has no clear home, so CSMs rebuild it from kickoff calls and old emails.

Then the contract is amended, or comes up for renewal. The deal says one thing, the contract says another, and nobody can tell which is right. DreamHub had to give sales and CS one place to work, with the contract at its centre.

The project

DreamHub is an AI-native CRM for B2B software revenue teams, and my current work. It follows revenue from first touch through renewal, and treats retention as half of it. The goal of this project was to model what happens after Closed Won, so the CRM stays honest about what was signed, through every amendment and renewal.

To confirm: the company stage and anything you want to add about the team.

Role

As the sole product designer at DreamHub I:

Shaped the contract model with engineering: what a contract is, what counts as a change, and what counts as a new agreement.
Designed the contract record, Terms History, the Closed Won intercept and the renewal flow.
Worked directly with the founders and engineers from the model to the final UI.

To fill: who you worked with and when this shipped.

Constraints
01
The deal already exists

Contracts had to grow out of the existing deal record without breaking pipeline and revenue reports.

02
Signed terms are history

What a customer signed can never be overwritten, so every change has to be traceable.

03
Reps move fast

No extra steps on the everyday path. Anything new could appear only when it matters.

04
Fixed meaning, flexible surface

In DreamHub every concept, renewals included, has one fixed meaning that the AI relies on. Teams can shape fields and stages, but a contract had to mean the same thing everywhere.

Check these against the real constraints and swap any that don't fit.

02
Solution
The model in one line

After Closed Won, the contract is the source of truth, and the CRM never quietly disagrees with it.

DESIGN COMING SOON
Contract record
Every won deal hands over to a contract

When a deal closes, its terms become a contract: seats, price, start and end dates. The deal records the sale. The contract becomes the source of truth for what the customer signed.

DESIGN COMING SOON
Terms History
The history reads like the account's story

Every change appears on one timeline, named in plain words and backed by a reference ID that never changes. When someone asks why a number moved, the answer is one line on the timeline.

DESIGN COMING SOON
Closed Won intercept
The CRM asks before it disagrees

Change the amount on a won deal and DreamHub asks what you mean, before the deal and the contract can split.

DESIGN COMING SOON
Renewal
A renewal starts a new agreement

A renewal starts as a copy of the current contract and becomes its own agreement, linked to the one before it.

Key decisions

Four modelling decisions shaped everything above.

01
A renewal is a new contract

A renewal duplicates the contract into a new one, linked to the agreement it renews. The original keeps its own terms, dates and history.

Why →
A renewal is a new agreement, not an edit. It is signed again, it can change almost everything, and finance reports on it separately. Modelling it as a version would quietly rewrite what the customer signed the first time.

02
Versions people can read

Every change gets an immutable reference ID for the system and an auto-generated name for people, written from the diff itself: "Added 20 seats, extended to Dec 2026".

Why →
"v7" tells nobody what changed. The ID keeps every version traceable and can never be edited, and the generated name means nobody has to write one. The timeline reads like the account's story.

03
Catch the edit at Closed Won

When someone changes a financial field on a Closed Won deal, an intercept stops them at that moment and asks what they mean: amend the contract, or keep the deal as it is.

Why →
Editing freely lets the deal and the contract drift apart without anyone noticing. Locking it pushes people into workarounds. The intercept appears only at the exact moment the numbers would split, and asks one question. As DreamHub puts it, a wrong field is worse than an empty one.

04
Terms History is a timeline

A vertical timeline of events, newest first. Each event names what changed, when, who changed it and why, with renewals marked where one agreement hands over to the next.

Why →
People ask a contract's history questions in time: what did they sign, when did it grow, what changed before the renewal? A table answers which cell changed. A timeline answers what happened.

03
Research
Closed Won is where the questions start

Watching how sales and finance teams actually work after a deal closes, four things kept coming up. Each one shaped a decision.

01
A renewal is signed again

Finance counts a renewal as new business: a new signature, new dates and often a new price. Nobody treats it as an edit to last year's deal.

Led to →
01 A renewal is a new contract

02
Nobody remembers v7

When someone asks how an account grew, they ask in events: when it added seats, when the price changed. Version numbers answer none of that.

Led to →
02 Versions people can read, 04 Terms History is a timeline

03
Won deals still get edited

Reps reopen won deals to fix an amount or a date, usually with good intentions. Every edit is a chance for the deal and the contract to disagree.

Led to →
03 Catch the edit at Closed Won

04
The handoff shouldn't be a handoff

When a deal closes, customer success inherits the account. If the terms live in a PDF or a spreadsheet, the first thing a CSM does is ask sales what was signed.

Led to →
The contract record, one place sales, customer success and finance all read

To confirm: where these came from (customer calls, the sales team, RevOps, your own audit), and add a quote or a number if you have one.

04
Design process
Each decision replaced an obvious model

Each time, there was an obvious model that looked fine in a demo, and a less obvious one that holds up under real B2B sales operations. On the left is where each decision started, and on the right is what we built.

WHERE IT STARTED
The obvious model
Treat a renewal as the next version of the same contract, with new dates and a new price.
Number every change: v1, v2, up to v7.
Let reps edit a won deal freely, or lock it completely once it closes.
Show the history of terms as a table, one row per version and one column per field.
→
WHERE IT LANDED
What we built
A renewal is a new contract.
Versions people can read.
Catch the edit at Closed Won.
Terms History is a timeline.
What each choice cost
01
More records, linked

A renewal as its own contract means more records. Linking each one to the agreement before it keeps the chain readable.

02
One more step, only at the risk

The intercept adds a step, so it appears only for financial fields on Closed Won deals, never for notes or contacts.

03
Short names, full detail

A generated name summarises the change. The full diff is one click away under the reference ID.

Check these trade-offs against what you actually built.

05
Takeaways
Outcome

To fill: what shipped, who uses it, and any signal since, such as fewer mismatches between deals and contracts, renewals tracked in DreamHub instead of spreadsheets, or a quote from a customer or the sales team.

Lessons
01
Model the business, not the screen

The hardest part was deciding what a contract, a change and a renewal are. Once the model was honest, the screens were simple to design.

02
Invisible decisions are felt

Nobody notices that a renewal is a separate record. They notice when the numbers always match.

03
Interrupt at the right moment

A single question at the moment of risk beats both a locked record and a free-for-all.

What I'd do next

Test Terms History with the people who read it most, finance and RevOps, and bring upcoming renewals onto the same timeline, next to the renewal forecast and health score customer success already works from, so a renewal shows up before it is due rather than when it is late.

Rewrite in your own words, or keep.

Next in the conversation
LWF Observer

===== CASE lwf =====
LWF Observer
LWF Observer

Simplifying and modernising the core of a water monitoring system, so utilities can find a leak and act on it fast.

Role
UX/UI designer
Company
LWF Corp (via a UX/UI agency)
Year
2024
Overview
Solution
Research
Design process
Takeaways
01
Overview
About

LWF Corp builds a water loss detection system for water utilities. A large share of the water that enters a city's pipes never reaches a tap: it is lost to hidden leaks, illegal drilling and theft, and usually found only weeks later, if at all.

LWF Observer is the system on top of the technology, on tablet and mobile. It is where network managers and field teams get alerts, follow what is happening across the network, and manage the sensors.

How it works

Think of it as a smoke alarm for water pipes.

01
Keep watch

Small sensors are fitted along the water pipes. They keep watch day and night, so nobody has to walk the streets looking for wet patches.

02
Spot the problem

Smart software learns what a healthy pipe looks like. When something changes, like a leak, someone drilling into a pipe or water being stolen, it notices.

03
Send the team

An alert pops up on the team's tablet or phone and shows exactly where the problem is, so they can go straight there and fix it.

The brief

I worked on LWF as a UX/UI designer at a design agency. The client came to us with a working system built on a very basic, outdated UX. The technology underneath was strong, but the system did not show it.

The job was to simplify and modernise its core: rethink the structure and the main flows so the system is easy to understand, then give it a modern interface a team can trust when an alert comes in.

My role
UX/UI designer at the agency, working directly with the LWF team.
UX: audited the existing system, restructured its navigation and information, and redesigned the core flows.
UI: built a new visual language and component set, and designed the high fidelity screens for tablet and mobile.

To fill: the team you worked with, how long the project ran, and the handoff to developers.

02
Solution
The redesign in one line

One calm view of the whole network, and a clear next step for every alert.

DESIGN COMING SOON
Home, redesigned
One home for the whole network

The new home answers the first question anyone asks: is everything OK? Network health, open alerts and sensor status sit on one calm screen, instead of spread across several.

DESIGN COMING SOON
Alerts, redesigned
Alerts, sorted by what matters

The most urgent alert is always on top. Each one says in plain words what was found, a leak, drilling or theft, how serious it is and whether someone is already on it.

DESIGN COMING SOON
Map, redesigned
The map and the list, together

Pick an alert and it lights up on the map. Location is never more than a tap away, and the map shows only what you need to act on.

DESIGN COMING SOON
Alert details, redesigned
Every alert has a next step

The alert page shows what happened, where and how sure the system is, then the actions that follow: send a crew, add a note, close it.

DESIGN COMING SOON
Sensors, redesigned
Sensors without the manual

Adding and checking sensors became a short guided flow, so a field technician can set one up without calling the office.

DESIGN COMING SOON
Alerts, mobile
DESIGN COMING SOON
Map, mobile
DESIGN COMING SOON
Alert details, mobile
In the field, on a phone

The same system on a phone, cut down to what a crew needs on the way to a site: the alert, the location and the next step.

03
Research
Where it started

The system had grown feature by feature, around the data rather than the people using it. Every reading was there, but finding the one thing that needed attention took experience and patience.

The original system

A few screens as they were handed to us.

DESIGN COMING SOON
Home, original
DESIGN COMING SOON
Alerts, original
DESIGN COMING SOON
Map, original
System audit

I went through the system screen by screen and mapped every flow. Four problems kept coming up.

01
Too many places to look

The same information lived on several screens, so getting a full picture meant jumping between them.

02
Data without meaning

Raw readings and technical terms, with no clear status. Users had to work out for themselves whether something was wrong.

03
No clear next step

An alert told you something happened, but not what to do about it or who was handling it.

04
Dated and inconsistent

Every screen looked a little different, which made the system feel older and harder to trust than the technology behind it.

Check these four against what you actually found, and add any input you had from LWF or its users.

04
Design process
Principles

Three rules guided every decision.

01
Simplify

Fewer screens and fewer steps. If a piece of information did not help someone decide or act, it moved one level down.

02
Prioritise

Urgent things first. Status, colour and order all point to what needs attention now.

03
Modernise

One consistent visual language and component set across tablet and mobile.

Information architecture

I rebuilt the structure around a few clear destinations, instead of a long menu that mirrored the database.

To fill: the old menu compared with the new one, and why.

DESIGN COMING SOON
Sitemap, before and after
Core flows

The flows people use every day, redesigned from start to end: handling an alert, and adding a new sensor.

DESIGN COMING SOON
User flows for handling an alert and adding a sensor
Wireframes

Wireframes to test the new structure and flows with the LWF team before any visual design.

DESIGN COMING SOON
Wireframes of the new system
UX wireframe
UI
Drag to compare the wireframe with the final UI
Design system

A modern, calm look that matches the quality of the technology: a clear status colour scale, readable type for the field, and one set of components for tablet and mobile.

To fill: the palette, type and key components, like the palette in Off Grid.

DESIGN COMING SOON
Colours, type and components
Before and after

The same screens, before and after the redesign. Drag to compare.

Before
After
Home
Before
After
Alerts
Before
After
Alert details
05
Takeaways
Shipped

The redesign shipped as version 2.0 of LWF Observer, with a simpler structure and a new interface across the system.

Confirm the release, and add anything you know about how it landed: client feedback, adoption, fewer support calls.

What I learned

Simplifying a technical product is mostly deciding what not to show. Every piece of data mattered to the engineers who built it; the job was to turn it into answers for the people who use it.

Rewrite in your own words, or keep.

← Back to conversation
Next in the conversation
Clalit Innovation: Patient Record

===== CASE clalit =====
Clalit Innovation: Patient Record
Clalit Innovation
Patient Record

A patient record platform for nursing staff that gives the whole department a clear, current overview of every patient.

Role
UX Designer
Company
Clalit Innovation
Year
2024
Overview
User research
Wireframes
User interface
Takeaways
01
Overview
The project

Nursing teams track who is in every bed on a physical board on the ward wall. The board is separate from the hospital's digital records and updated by hand, and every department has built its own version with its own stickers, colours and codes.

The goal was a digital patient record board: one clear, current overview of the department, synchronised in real time with the other health data systems.

Role

As the UX designer of the project I:

Led the research: observed nursing teams on the wards and interviewed them about their daily work.
Designed the board from low fidelity wireframes to a high fidelity prototype.
Validated each iteration in feedback sessions with nursing teams and Clalit Innovation project stakeholders.
Worked closely with project managers and UI designers to bring the design into the Clalit design system.
Constraints
01
Read only, at a glance

The board hangs on the ward wall and nobody touches it, so a whole department has to fit on one screen, with no scrolling or zooming.

02
One system, many departments

Every ward had built its own board with its own codes. The design needed one shared foundation that each department could configure.

03
Built on the Clalit design system

New patterns had to fit the existing components and visual language.

04
Real-time data and patient privacy

The board syncs with the hospital's health record systems and shows sensitive information on a wall, so it had to meet medical privacy rules.

05
Busy, rotating teams

Nurses work shifts around the clock with constant interruptions, and many are less familiar with digital tools. Every detail had to read in seconds.

Timeline
Dec 2023
Kick-off
Dec 2023
Research

User interviews and observations.

Jan 2024
Concept

Low fidelity wireframes and iterations.

Jan 2024
Prototype and team confirmation

High fidelity wireframes.

Feb 2024
UI design

Implementation in the Clalit design system.

02
User research
Observations

I joined nursing teams in their daily work across youth, adult, internal and surgical departments at Geha and Carmel hospitals, to see when and how each team uses the board, under how much pressure, and what every department's board has in common.

The physical boards each department had built for itself.
What I learned as a fly on the wall
01
Rotating shifts

Teams work flexible shifts covering mornings, evenings and nights.

02
Constant interruption

Information moves fast, with frequent distractions.

03
Every unit is different

Each nursing team has adapted its way of working to its own unit.

04
Safety depends on it

Every team relies on the patient record for practical and safety reasons.

Pain points and needs
CRITICAL
There is no good way to show patients who are temporarily elsewhere, so the department status is hard to see.
→
Track patient locations both inside and outside the department, for example discharged patients.
The physical board is a separate system, so information goes out of date and can lead to life threatening situations.
→
A digital board that gives a clear overview and syncs in real time with other health data systems.
Vital medical information is missing.
→
Show different types of clinical information, customisable for each department.
USEFUL
The bed order and room layout are not shown.
→
Show the room type, number of beds and patient location, for example isolation.
NICE TO HAVE
The room arrangement on the board does not match the layout of the department.
→
A layout that closely follows the department's physical units.
03
Wireframes
Workflows

After the research and observations, I wrote a document summarising the workflows around the patient record: the essential information, the use cases and the users' needs. I then used it to decide which information each department's record should show.

Low fidelity

A Kanban layout: structured but flexible, customisable per department, with a clear hierarchy.

Header
Hospital and department switcher.
Patient
Name, gender and status icons.
Room
Number, beds and capacity.
Not in department
Patients elsewhere or discharged.
Kanban layout
Rooms as columns.
What the first iteration taught me

I tested the low fidelity board in feedback sessions with nursing teams. On the left is what they told me, and on the right is what I took into the next version.

FEEDBACK ON THE LOW FIDELITY BOARD
From the nursing team
A live summary of department data.
Different information on patient cards for each department.
Show patients who have a reserved bed but are not in the department.
Make patients who are ready for discharge stand out.
→
WHAT I LEARNED
My understandings
Horizontal space is more valuable than vertical space.
Colour alone is not enough to show gender, so it needs an icon.
Show the bed number on every row.
Show empty beds instead of hiding them.
04
User interface
High fidelity

The board after the first round of feedback. The summary footer opens a reports drawer.

Room
Bed capacity indicator removed.
Ready for discharge
Marked beside the bed number.
Location status
Out of the room, bed still reserved.
Patient
Gender, clinical icons and severity badges.
Same name
Highlighted when two patients share a name.
Summary footer
Opens a reports drawer.
Card states

Every state a room or patient card can be in, from an empty bed to a patient who is out of the department.

Key decisions

Four decisions shaped the final board.

01
A Kanban board, organised by room

Rooms are columns and each patient is a card, like the boards the teams already hang on the wall. The layout is structured but flexible, with a clear hierarchy: department, room, bed, patient.

Why →
The medical team has established workflows. To be adopted, the digital board had to resemble the process they already trust.

02
Horizontal space over vertical

After the first round of feedback, I placed information side by side instead of stacking it: fewer lines per card, with status shown by icons and badges.

Why →
The board is read only and must show a whole department on one screen, with no scrolling or zooming.

03
Icons grouped by colour

Clinical icons are grouped into categories, such as sensitivities, treatment, breathing support, mobility, isolation and privacy, each with its own colour.

Why →
With limited space, many icons create clutter. Colour helps the eye find the right group before reading the icon.

04
Every patient has a known location

The low fidelity board had a separate "Not in department" column. In the final design, patients keep their bed and the card shows where they are: in surgery, in imaging, in another department, on leave or ready for discharge.

Why →
A patient who is out of the room is not missing. Keeping their reserved bed visible was one of the nursing teams' clearest requests.

UI components

Delivered as a component set in the Clalit design system: icons, badges, patient cards and room cards.

Icons
Grouped by colour.
Isolation
One symbol, a marker per type.
Patient
Name, ID, location.
Badges
Severity and leave.
Room
Empty beds stay visible.
Ready for discharge
Beside the bed number.
05
Takeaways
Outcome

Clalit adopted the concept and funded its development.

When I left the project, the team was preparing a pilot in one hospital to test how the board integrates with the existing health record systems and meets patient privacy regulations.

Lessons
01

The medical team has established workflows, so the digital system must closely resemble familiar processes to be adopted.

02

To ensure accessibility, I need to see how a read only screen looks in extreme situations, with no scrolling or zooming.

03

When space is limited, many icons create clutter. Colour coding organises them into groups and makes them easier to tell apart.

04

The medical team is a diverse audience, often less familiar with digital tools. Details that seem trivial need careful thought.

Looking back

The pilot's two big questions, integration with the hospital's systems and patient privacy, came late in my part of the project. Today I would bring the IT and privacy teams into the research from the start, and test the board on a real ward screen, from across the room, before the final UI.

Next in the conversation
WhatsApp Events

===== CASE whatsapp =====
WhatsApp Events
WhatsApp Events

A concept feature that turns a WhatsApp group into a lightweight event planner. Dates, places, tasks, RSVPs and shared costs live right where the conversation already happens.

Role
UX/UI designer
Company
School project
Year
2023
Overview
Solution
Research
Design process
Takeaways
01
Overview
About

Almost every get-together, from a birthday to a weekend trip, gets planned in a WhatsApp group. WhatsApp Events adds the tools those groups are missing without pulling anyone out of the chat: a date and a place everyone agrees on, shared task lists, RSVPs and split payments.

Like a group admin, every event has an organiser, who can make it open or private and send reminders to friends and family. An event can repeat, like a weekly game night, or wrap up and disappear once it's over.

The problem

WhatsApp is how we talk to friends and family, but a group chat is a poor planning tool. With a large group, getting everyone on board and handing out tasks and information gets messy fast.

01
One person carries it

The organiser ends up chasing replies, collecting money and keeping everyone up to date.

02
Decisions sink in the scroll

Dates, places and who brings what get buried under a stream of messages.

03
The tools live elsewhere

Polls in one app, lists in Docs, payments in Paybox. Nothing is connected to the chat.

Planning today

Lock the group or open it up, and planning breaks either way.

OPTION A · BAD
Admin-only group

One person carries it all. When only admins can post, the organiser has to announce, remind and chase everyone alone.

OPTION B · WORSE
Open group

A thread with no end. When everyone can post, the list, the spreadsheet and the bank transfers all end up in the same endless thread.

02
Solution
Value proposition

Simple planning tools inside the chat people already use, so the organiser stops chasing and everyone knows what's next.

Start an event

Events gets its own tab next to Chats. An event looks and works like a group, with extra tools attached to it.

Name the event and invite people from your contacts or an existing group.
Set the date and place now, or open them to a vote.
Make the event open or private.
Time and location

Every vote has two sides. The organiser sets it up, and invitees answer it right from the chat.

Organiser

Dates up for a vote, and a pin for every place

Offer several dates or places and let the group vote.
Every place option gets a pin on the map, so voters can see how they would get there.
Set a deadline for the vote.
Allow one choice or several.
Only the organiser can release the vote card from being pinned.
Pinned to the top until you vote
Collapsed once you vote, and can be closed
Voting closed: the result is in the event info
Invitee

Vote cards pinned in the chat

A vote card stays pinned to the top of the chat.
After voting, the card collapses and can be closed.
When voting ends, a notice points to the result in the event info.
Tasks

The organiser decides how much freedom invitees get, and invitees pick up what they can from the list.

Organiser

Set the rules

Add tasks, like who brings the drinks.
Break a task into subtasks, and set how many people each one needs.
Decide whether invitees can assign themselves or add items.
Invitee

See who took what and claim the rest

Get notified about a new task.
Pick one up from the task list.
Mark it done once it is handled.
Payments

Everyone pays their share inside the event, so nobody has to chase bank transfers in the chat.

Split it your way

Add an expense you paid for the event.
By default it is split evenly, or you can include only some of the group.
Everyone is notified about a new expense.
Track who has settled up, and open the balances from the event info to see who owes whom.
RSVP

Invitees answer in one tap, and the organiser always knows who is coming.

The invitation pop-up

When you are invited, a pop-up asks you to RSVP or jump into the event chat.
Answer Going, Maybe or Can't make it.
The organiser sees the guest list update in real time.
If you can't make it, you choose whether to stay in the chat or leave it.
Event info

The group info page becomes the event's home, with everything in one place.

See who is coming.
The latest date and place. Add the event to your calendar, or tap the location for directions.
Every poll and announcement, in case you missed something, sorted by date or by name.
A shared album of every photo people upload, ready to download at once.
Payment balances, and who still owes whom.
03
Research
User research

I ran 7 interviews and a survey with 34 respondents aged 19 to 67. All of them had planned a family or friends event in the past year, and almost all said the planning starts, and mostly stays, in WhatsApp.

67%

Said nobody but the organiser took any initiative

84%

Used tools outside the group chat to plan the event

62%

Are still in more than 10 group chats from past events

Why WhatsApp?

95% of respondents said their main tool for planning any event is messaging on WhatsApp. The group is already there, and end-to-end encryption keeps everything shared in the chat secure. So the answer was to bring the planning into the chat rather than build another app.

What I heard
01
Lack of engagement

Invitees stay unresponsive and the organiser ends up micromanaging. Getting people to take part is the key to a better get-together.

02
Out-of-app tools

Most people plan with apps outside WhatsApp, like Docs, Sheets and Paybox, which makes it hard to keep track of anything.

03
Lost in the chat

Details are hard to find. People ask the same questions again or scroll back for the one message that mattered.

04
Too many group chats

Every event gets its own new group, even though events are temporary, and those groups stay around long after.

Personas

Every event has two sides, so I wrote a persona for each.

ORGANISER
Oren Lev
33, Tel Aviv. Data scientist, married with one child, and the planner of his friend group.
FRUSTRATIONS
Chasing invitees for a reply. Juggling several apps to keep the event's details in order.
NEEDS
Tools that keep the information organised, and a chat that nudges invitees to act instead of just reading.
“Planning in a group chat should be easier. When everything happens in messages, it's hard to decide anything or follow what's going on.”
INVITEE
Shira Stein
37, Kibbutz Palmachim. Social worker, married with three kids, and the “just tell me when to show up” type.
FRUSTRATIONS
The basic details are impossible to find in a running conversation. Too many dead group chats from past events.
NEEDS
A reminder of what's next and what to bring, and an event chat that goes away once the event is over.
“I'm honestly overwhelmed by all the texts about this event. Just tell me what to do and I promise it will happen.”
04
Design process
User flow

One flow covers both cases: creating a new event, and jumping into an event that already exists to update its tasks, dates or location. I then designed every screen from two sides, the organiser who creates the event and the invitee who joins it.

Sketches

After the research I knew the MVP had to stay small and focused. Rather than inventing new patterns, I borrowed ones WhatsApp users already know: a new tab beside Chats, the attachment menu, poll cards and the group info page.

‹
›
Wireframes

Every flow, screen by screen, from both sides: the organiser who sets the event up, and the invitee who gets the invite and answers from the chat.

ORGANISER
INVITEE
05
Takeaways
Next steps

Three ideas I would explore next.

Smart reminders

Let organisers schedule automatic nudges for tasks that are still open.

Payment method

Choose cash, card or transfer when adding an expense or settling up.

Locked messages

Long-press a message to lock it, so key details can't get lost in the chat.

Looking back

WhatsApp has since shipped events in groups and Communities, close to the core of this idea. Today I would cut the scope further, and test the vote card and RSVP with a real group planning a real event before designing anything else.

Next in the conversation
Off Grid

===== CASE offgrid =====
Off Grid
Off Grid

A trip planning app that helps you travel your way: it gets you to the places you care about and arranges each day around your time and the distances between stops.

Role
UX/UI designer
Company
Personal project
Year
2022
Overview
Solution
Research
Design process
01
Overview
About

Off Grid is a B2C mobile app for travellers who want to tour like a local. You tell it what you are into and how much time you have, and it plans an optimal route for every day of the trip.

The problem

Three things make planning a trip harder than it should be.

01
Time consuming

Planning a trip means pulling information and recommendations together from many different platforms.

02
Lack of customisation

It is hard to discover places that suit you, especially if you avoid heavily touristed areas.

03
Optimising a route

Learning a new city and its surroundings well enough to plan sensible days is frustrating.

02
Solution
Value proposition

A trip planner that builds an itinerary from your interests and your available time, on the best route for each day.

Home and My trips

Pick up where you left off, and get inspired by trips other users have shared.

Create a new trip

Six short steps: destination and dates, trip purpose, interests, transport, day intensity and free time. Then the app builds a daily itinerary.

Trip, day agenda and stop

Drill down from the whole trip to a single day, then to one stop with its details and nearby suggestions.

Edit the itinerary

Drag stops to any hour or day, delete them, or swap them for similar places the system suggests.

Map view

Every day as a route on the map, with live navigation between stops.

Onboarding

A short, playful introduction before sign up.

03
Research
User interviews

I interviewed seven people from the target audience. All travel at least twice a year, and all had been abroad in the six months before the interview.

What I heard
01
Research before the trip

Deciding where to go is hard. Most people build their list from friends' recommendations and social media.

02
Planning the itinerary

Building a logical route is tedious. Most skip ordering stops by distance and splitting the days, and pay for it in time.

03
Unforeseen circumstances

Weather or a closed venue can break the plan. Flexibility keeps those moments small.

04
Finding hidden gems

Most do not care about the tourist "must-sees". They avoid busy spots in favour of unique places.

Persona
Roni Klein
29, Tel Aviv. Legal consultant at a tech company.

Roni travels twice a year for work. In her free time she looks for new food and art places and avoids tourist sites.

NEEDS
To track her trip and see each day's agenda in an easy, visual way.
WANTS
To find new places that match her interests.
EXPECTS
An efficient itinerary, optimised for distance, opening hours, crowds and budget.
“I'm sluggish when planning a trip overseas, especially on tourist websites that recommend the same places I don't care about.”
Competitive research

I ran a heuristic evaluation of eight trip planning products.

Lambus
Maps.me
Sygic Travel
Tripadvisor
Visit a City
TripIt
Pluto
Wanderlog

Most have an explore section for inspiration, but the content is the same touristic "must-see" list. None lets you browse trips from people who share your interests.

04
Design process
User flows

Two core flows came out of the research: creating a new trip and editing it.

Wireframes

I kept the structure simple and familiar: a trip wizard, a home page and My trips, with drill down navigation from a trip to a day to a single stop. More than 50 mid fidelity screens covered every flow.

Usability testing

I tested a prototype with six participants from the target audience, across eight sets of tasks. The focus was efficiency, anxiety and discoverability, and the results drove a round of fixes.

Before
After
Chips are grouped into cards.
An icon beside each title makes scanning quicker.
"Show less" moved to the end of each card for clearer progressive disclosure.
Before
After
Arrows show that you can swipe to change the mode of transport.
A new card sets your stay address as the starting point.
Swipe between days without going back to the itinerary.
Before
After
The toggle split the two options and raised anxiety. Cards with radio buttons now show both on one screen, each with progressive disclosure.
The copy was rewritten because the difference between the options was unclear.
‹
›
Look and feel

Youthful but informative. The app is full of photos, so black is the primary colour to balance the visual load, with bright accents to keep discovering new places fun. Type is set in Poppins.

Primary
#27272A
Neutral
#72747B
Neutral
#F2F2F6
Accent
#DCED59
Accent
#FF471A
Accent
#BCBBFF
Accent
#0A5748
Next in the conversation
Clalit × Headspace

===== CASE headspace =====
Clalit × Headspace
Clalit × Headspace

An imaginary UI project that shows how the Clalit Health Services app could look if it inherited the Headspace design system.

Role
UX & UI Design, Illustrator
Company
Concept project
Year
2022
Overview
Solution
01
Overview
About

An imaginary UI design project showing how the Clalit Health Services app would look if it inherited the Headspace design system. The aim was a friendlier interface that improves the experience and accessibility for a wider audience.

So why Headspace?

A friendly, positive UI matters in healthcare products. It builds confidence, encourages people to engage with and keep track of their health, and eases the anxiety and stress that come with medical care. The result is a supportive space for managing your health.

Process
Original UX wireframes
UX tweaks and improvements
Headspace design system implementation

“Physical health is inseparable from emotional and mental health. In nurturing one, we fortify the others, creating a harmonious symphony of well-being.”

World Health Organization
02
Solution
Onboarding
Headspace UI
Secondary button
A clearer visual appearance.
Logo
A subtler, logo-like appearance.
Carousel
Users must log in before any action, so cards can’t be quick actions. A carousel of uplifting content replaces the horizontal scroll.
Home
Original
Headspace UI
One page
All main sections on one page, with no horizontal scrolling.
My medical file
Original
Headspace UI
Clearer heading
A better heading for orientation.
Friendlier cards
An illustration on each card makes the file less formal and more positive.
Categories
Original
Headspace UI
Test results
Original
Bottom sheet
Headspace UI
Hide notes
An option to hide notification notes.
Bottom sheet
Cards can be minimised for a cleaner list. Details open in a bottom sheet instead of inside each card.
Vaccines
Original
Headspace UI
Tabs
Tabs instead of a filter button make the list simpler.
Status
An indicator shows when a vaccine has expired or is due.

Your path to feeling better is just a click away with our healthcare solutions!

Next in the conversation
DreamHub: AI that shows its work`;
