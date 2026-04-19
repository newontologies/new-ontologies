---
layout: ../../layouts/Post.astro
title: "New Ontologies: Ando"
subtitle: "Inside Ando"
date: 2026-02-15
tag: company building, future of work
image: /images/andoposter2.png
---


## A first look into Ando
Nestled among the institutional red brick in a corner of Jackson Square sits the new Ando office, saturated in soft morning light. A large oak is a shock of green through the window. On the ledge by the desks sits a chess board with pawns mid-move. The engineers tell me they are playing one long, perpetual, game of chess.

Ando is remarkably quiet online. Though the team has raised double digit millions from blue chip investors, there is no official funding announcement, no public product, no launch party. Sara Du, the CEO of Ando and previous CEO of Alloy Automation, is far more interested in crafting the precise right feeling in the product for early users than trying to brute force her way to more exposure. As such, writing this piece feels like divulging a very well kept secret: This small, internet native guild of philosophical engineers are quietly building the scaffolding for a new default communication layer between agents and humans.

Ando is building a new work communications platform from the ground up. Where existing platforms like Slack were designed for human-to-human communication, working well with agents requires fundamentally different infrastructure. 

The company focuses on harnessing the potency of unstructured conversation and language. Ando believes the raw, messy conversations, what they call chatter, that live between humans across nested messages and calls are important context for a world of working with agents. Chatter is elemental, because it reveals human intent. Ando aims to help capture raw thought and make it useful.
The philosophical frame is important: If architecture shapes how we live, software shapes how we work. Most people spend more waking hours inside a work messaging platform than inside any single room. Like any technology, it sculpts our agency. 


## Talk is not cheap
San Francisco in 2026 has succumbed to agent mania. Inside companies' offices tucked away in the Financial District, North Beach, and Jackson Square, employees are buying custom extra-long horizontal curved monitors and running six agents simultaneously across different terminal windows, all side by side and in view. Engineers call their agents over the phone and bark orders. They’re responded to by surprisingly sanguine, lifelike, voices. One data researcher sheepishly admits he feels bad because he's constantly interrupting and micromanaging his agent. Agents are described as “infinitely patient, infinitely capable” mirrors for the humans that run them.

The volume of chatter is exploding alongside agent use. “We’re messaging nonstop,” one OpenAI researcher tells me. “The casual nature of chatting encourages people to share ideas more often, rather than waiting for everything to be fully baked."

All this unstructured conversation is “incredible fodder for agents,” Peter, a core engineer at Ando observes. But there is a lot of rawness and entropy in conversations. A reply might reference something from five messages ago. You make decision A on day one, change to decision B on day two, revert to A on day three. A work messaging platform is only useful when systems start to capture evolution in reasoning, and leave a trace for agents to follow. Different organizations also have different types of chatter - a nursing agency talks about shifts and time-bound work far more than a large enterprise software company does. This is why two messaging platforms containing identical words will produce different organizational outcomes. It depends on how you structure words for consumption.
If you geek out about context engineering, you might enjoy talking to the Ando team. The Ando platform captures everything natively, from the casual DM to transcribed voice calls. Embedded audio and video sessions are named jams. Mid-jam, someone says, "Claude, take a look at this attribute in the codebase,” to mark where the agent should direct attention toward.

[picture of product]
Making the platform “ergonomic for agents” is a non-trivial technical problem. To feed agents with information that makes them truly useful, Ando does a heavy lift on pre-labelling work to create taxonomies and a plane for agents to more easily traverse. 
Another stated goal of Ando’s messaging infrastructure is decoding intent inside of a string of messages. Jordan, another engineer on the team, describes that the core concept of a message is not when a user types something and presses enter, but when a human has an intent to convey a thought and puts it down into text. To bundle messages together into one intent, an agent groups incoming messages into conversational units and annotates them, like earmarking a trail to follow out of the maze of context.
Peter muses that they are both “building AI Slack, and Slack for AI.” Both agents and humans have data storage, notification inboxes, file systems. Both can join and leave channels, can talk to each other with rich messaging capabilities. In capturing every single conversation and utterance, Ando aspires to observe and collect one of the richest troves of human-agent interaction data.

## Words that last: human intent, and the bpm of human conversation
The words you write define how people see and interpret your intentions. After all, words have soul. We use them to debate, to persuade, to forgive. In a chat interface, where you never see someone's face, words are the entire medium. 
As a result of creating work messaging, you end up quickly converging on interesting linguistics and complexity research. People talk in varied ways. Vocabulary is diverse, and dialogue comes in multiple modalities: chats, nested threads, calls. Some people prefer concise, sharp sentences. Others are more prone to online soliloquies. Sometimes all you know of someone is how they articulate themselves on chat. 
As I am writing this, software engineering as a function has changed dramatically in the span of 24 months. Researchers predict that 99% of code within an organization will soon be written by AI. Some say they are deeply affected by witnessing a pure intellectual pursuit dwindle into a listless passive reviewing. Others willingly confront change.
Ryan Haraki, founding engineer at Ando, tells me this change to engineering culture means honing in on precision in language. Gone are the days tweaking particular bits of programming syntax. Instead, engineers need to develop the skill of articulating the shape of problems really well. “When a sentence can be interpreted in lots of different ways,” he states, “getting the sentence right is important.”
The team is hyper aware of the bpm of human conversation. How the rhythm of words is shaped by text length, specific word choice, cadence and interchange between participants. "The way agents interject today is very artificial," Sara says. "It changes the flow of conversation.” In some ways, design is prompt engineering. A user must love the feel of talking inside of the platform, and want to spend time within it. Hemingway’s compact prose is an influence, for example, whose writing is described as very direct sentences, smooth rivers, clear water over granite, no sinkholes. Making words concise, well-paced, and calm is what Ando pays attention to in designing a messaging product.

## “I expect 100% of my tickets to flow through Ando”,
It was dark and 1am in Warsaw when Alex Mac of Truth Systems hopped on a call with the Ando team. He spent his entire Christmas and New Year staying up into the early hours of the morning attempting to develop Slack workflows, debugging and optimizing. At one point he was spending close to a quarter of his time doing so, but his attempts consistently broke. There was no strong session management or self‑improving memory; his customized workflows couldn’t reliably learn standards or design decisions over time.
Today, Truth Systems’ engineering team is one of Ando’s early customers. Much of their pre‑coding process now lives inside Ando, including all of the tickets they created and closed.
Alex lights up when he describes hopping on a call with a coworker and immediately tells Ando: generate a ticket based on this call.
Feed an agent with the exact right context, and it performs beautifully. When engineers discuss an implementation problem in a thread, an agent generates a Linear ticket with full context: call transcript, the channel history, their connected codebase and Linear, and compares it against a set of previous gold standard tickets that define what good looks like. The end output is a multipage implementation‑ready ticket that includes architecture and key considerations.
[picture of product]
Philosophically, Alex thinks of agents less as subservient task tools and more as true peers in a multiplayer environment. In his view, Ando is uniquely positioned because it accumulates high‑fidelity data on human‑agent collaboration, which he expects will enable the team to be on the frontier of long horizon agent experiences

## Architecture, UX for Agents, and cross-pollination
What constitutes whether or not you want to spend time in a place is the number of interlocking patterns that make you feel alive. The architectural theorist Christopher Alexander once wrote
When you build a thing you cannot merely build that thing in isolation, but must also repair the world around it and within it, so that the larger world becomes more coherent and more whole.
Software, too, yields ambient feelings. Internal to Ando, messaging is referred to as the civic fabric of digital organizations, architected with similar reverence and care. 
It is apt that the name Ando originates from the Japanese architect Tadao Ando, whose work emerged from the urban fabric of post-war Osaka. He worked as a boxer and truck driver before teaching himself architecture through travel and books. The thread running through his work is constraint and solitude. Oliver describes his visit to Ando’s Taishong National Army museum as a moment of calm and solitude he’d like to replicate in the product. We are building something multi party, multi channel, multi agent, he elaborates, but what we want to make people feel like just one user.

Silence is a design value in a world of noise and distraction. Rather than amplifying every notification, Ando collapses irrelevant chatter and creates digital spaces where work is less overwhelming and more grounded.
"Agency is often a function of system design," Sofia Dolfe from Index Ventures - an early investor in Ando remarks. If you reconstruct a communications platform, you set up a new cultural and social contract for how to have better conversations with agents, and with one another. 
This requires a design-forward way of seeing the world. It requires lateral thinking and cross pollination between technical and design culture, folded into keen product intuition.

## Compulsive curiosity and lateral thinking: Sara and Ando team
Anyone who meets Sara can sense the quiet intensity running beneath the outward polish and composure. With that, a voracious, wide ranging appetite for art, linguistics and philosophy. As a teenager, she read technology outlets like Wired and The Atlantic alongside more niche streetwear, punk, and subculture magazines. Thrasher. Highsnobiety. Complex. Perhaps this isn’t surprising. Sara grew up in Atlanta, a city whose biggest cultural export was hip hop and remix culture, where it was common for artists to cross-pollinate each other's work and draw from a communal well of sound. There are inklings of design and aesthetic taste embedded in the Ando product: an astute eye for style, typography, color schemes. Beyond aesthetics, an attunement toward energy and tactile feeling of product is just as important as technical edge.
A year into Harvard University, Sara dropped out with the conviction that she wanted to build tools people would love. That inkling became Alloy, which raised over $27M of venture capital and served large-scale enterprise customers for five years. Back then, 
>"I was so raw as a 19-year-old, I just wanted to win," 

she told me. Five years later, she would leave Alloy to build a product “that people touch directly.” She knew design would be a core part of her natural skillset and edge to bring to a company. For her second company in Ando, she tells me it is her personal duty as a founder to create something out of pure obsession and techne — her life’s work.
[picture of Ando team]
When she hires, she values craft. An engineer who fits in at Ando refuses to ship a subpar product because by extension they’d feel as if they have created a subpar version of themselves and put it out into the world. 
The wider Ando team brims with this rare combination of heaviness of work and lightness of ego. In Ando’s own daily chatter, you might overhear a heated debate involving words like “long time horizon” and “the calorie tradeoff of building.” Within the platform, chat contains more Gen Z and pop slang. Through Jordan, I learned some new slang of my own: “putting the fries in the bag,” means “stop talking and just ship product.”
Jordan goes on to aptly describe the team as ‘compulsively curious.’ In discussing the product through hours long conversations with each of the engineers, I find myself falling down rabbitholes. We talk about Borges and Dostoyevsky in one line, cycling in another. One explains to me the cycling analogy of the domestique. The domestiques ride at the front, absorb the wind resistance, and peel off when the team leader arrives at the decisive moment with energy in reserve. 
Therein lies a central contrast. Everyone has a very playful UI, but is also deeply serious about their work. In a robotaxi to the financial district, Sara muses that perhaps it is precisely this mixture of fastidiousness coupled with romanticism that gives them the boldness to completely rebuild work communication from the ground up. 

Later that week, Sara and I spent an evening curating a linguistics dinner. One of the references on the table was by Noam Chomsky, the modern language philosopher
Language is a process of free creation; its laws and principles are fixed, but the manner in which they are used is infinitely varied.
There are infinite ways to describe a dream, as there are infinite ways to prompt a product, to articulate a feeling. I get the sense that this is at the beginning of Ando’s reasoning — and the end of a writer’s line of inquiry. Language is a living matter. We translate the interior world into words, and words set things into motion.
    An entire mythology is stored within our language.  

Conclusion - TBD 

