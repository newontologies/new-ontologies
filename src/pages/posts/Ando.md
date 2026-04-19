---
layout: ../../layouts/Post.astro
title: "New Ontologies: Ando"
subtitle: "Inside Ando"
date: 2026-02-15
tag: company building, future of work
image: /images/andoposter2.png
---
## A first look into Ando
Sara Du and Ando: AI-native Slack 



It's Friday night in San Francisco, and engineers are leaving parties early to work with their AI agents. Call an agent over the phone, and lifelike voices respond. On custom extra-long curved monitors, six agents run across different terminal windows, all in view. San Francisco is a boomtown, a place where the future announces itself first as restlessness and an anxiety of moving too slowly.

Sara Du and the Ando team are building for this emerging frontier of work, a new messaging platform enabling agents to work alongside humans, as true teammates rather than just bots. "The best human coworkers surprise you," Sara tells me. “They're proactive, they stew on things overnight and send you interesting thoughts in the morning. Why can’t agents be like that too?”

Ando has been quiet since inception. No funding announcement, no publicly available product, no launch party. It feels very David and Goliath — a small crew of obsessive builders going up against Slack and Microsoft Teams, who have dominated the space for over a decade. 

The Ando team rebuilt messaging from scratch, designed around agents from the start, rather than retrofitting onto traditional chat paradigms that only accommodate humans.

At first glance, there are many ways this could be intractably difficult. The first is replacing products of sheer ubiquity. Most of us have spent our entire professional lives inside Slack or Teams. As I write this, you might already hear the anxiety-inducing rattle-knock sound, a phantom message in your head. The other prevailing narrative is that foundation models will absorb everything and reduce applications to thin wrappers. 
Yet underneath initial skepticism, I felt drawn to Ando’s opposing argument: that interfaces will continue to matter, and that the feelings a platform evokes are a real and enduring form of defensibility. 
I spent a few weeks with the team as part of what I call an “independent field study” to understand the wager firsthand. 

When I first visited the Ando office, tucked into a corner of Jackson Square among the institutional red brick, it was awash in soft morning light. A large oak was a shock of green through the window. On the ledge by the desks was a chess board with pawns mid-move. The engineers told me they were playing one long, perpetual game. 

If you met them, I suspect you would want this quirky, motley crew to win.

## Sara Du: design at the human layer

Sara Du and I first met at a wood paneled tea house on Kearny Street. Her voice sat just below the ambient noise of the room. Beneath her calm demeanor, I sensed a quiet intensity. As I got to know her over a few weeks I realized: peel back a layer of polish and you’d find a deep restlessness beneath. 

Ando is her second company. She founded her first, Alloy Automation, when she was 19. 

"Back then, I had a huge chip on my shoulder," she reflects. "Pure raw energy. I wanted to apply myself to just winning at something."
"And now?" I asked her.

"I realized there are other things that motivate me more, like building software that people touch and feel every day."

Sara grew up in Georgia to non-entrepreneurial parents, a system engineer and hospital worker. Their lives followed a steady procession from graduate school to a settled life in the suburbs two hours north of Atlanta. Far enough that you could watch the moon rise over the pines, a gleaming dome of light, and see nothing else for miles. She spent a lot of time alone.

Though the quietness was peaceful, the monotony was unbearable. When Sara projected her life out, it was entirely riskless. When she taught herself to code and started posting projects online, the internet became the first place that felt full of possibility. Friends from Twitter convinced her to buy a one-way ticket for SF, where she couchsurfed through hacker houses scattered across farflung parts of the city. RX Bars constituted entire meals because the kitchens were filthy, and she didn't know how to cook. Like any frugal student she meticulously tracked her Uber Share rides and meals on a spreadsheet, capturing expenses down to the dollar. "I still have that spreadsheet," she tells me. "I look at it every year to remind myself I was making a big deal out of spending a few hundred dollars in a few months."

She lasted a year at Harvard before the inevitable pull back to San Francisco. But she wouldn't recommend skipping college altogether. Freshman year was "valuable to get properly socialized."
California has always been a gold rush town. “A place in which a boom mentality and a sense of Chekhovian loss meet in uneasy suspension,” Joan Didion wrote of the state in her essay collection Slouching Towards Bethlehem in the 1960s, “Things had better work out here, because here, beneath that immense bleached sky, is where we run out of continent.” 

You’d have to succeed here, for there was no further West to go. 

San Francisco was the antithesis of Boston's ivory tower intellectualism. It "didn't have any rules" in comparison. It was here, somewhere between SoMa and Mission Bay, that she started Alloy Automation, an API integration platform for enterprises. The company raised $27M from a16z, Bain, and Shopify and rode the ecommerce boom of 2020.

There's a Greek term I like. Techne means craft grounded in practice. A founder builds a particular shape of company out of their techne, meaning the specific skills and obsessions they bring to the work. I was curious about Sara's motivation for leaving Alloy, a company that was growing, to build something entirely different.

The decision came in the spirit of truth seeking. "I willed myself into being good at things that I'm just naturally not great at," she reflects in hindsight. “Good and great are so different.” She wanted to re-orient herself toward what she realized she was naturally skilled at, and called it a founder’s duty to match herself to the right market and problem where she could lead her team to massive success.

At Alloy, she had been playing a game where she didn't feel she had as many "cheat codes." Though by background an engineer, she eventually discovered her latent talent for design and marketing. She describes design as craft that goes beyond visual aesthetics, into the amorphous and hard-to-measure feel of using a product, from the naming of features and cadence of notifications, to spending hours inside of the data model. This kind of design matters most when the company you're building has to be adopted and loved by consumers. 

"Agency is often a result of system design," Sofia Dolfe, an early investor in Ando from Index Ventures, tells me. What Sara does uniquely, she thinks, is fuse broader cultural and design references with product sense, intuiting subtleties in how to frame a new social contract between humans and agents.

Spend time with Sara and you'd notice she is constitutionally unable to care less. Sweating the small details is a personal standard that shows up everywhere beyond the product. She was very opinionated that the office design should be calm and studio-like to inspire creativity. Over the weeks, sitting on the togo couch in the corner, I watched the mauve limewash go up and the wood panelling brought in.

The same instinct shows up in how she runs the team. In her free time she built an internal tool that gives everyone visibility into each other’s prompts and model traces. At most companies, how you talk to an AI is private, a little embarrassing even, the way search history is embarrassing. At Ando, prompting is a craft that you have a responsibility to help your colleagues get better at. 

Most of the decisions I watched her make over the weeks sat downstream of the same kernel of care. The texture of how people work together, down to the sentences they type into a model, is something a company can shape purposefully.

## What does Ando do?

It was 2am in Warsaw when Alex Mac of Truth Systems hopped on a call with the Ando team. Alex was spending an inordinate time building customized workflows on top of Slack for his engineers. He stayed up into the early hours of Christmas and New Year’s morning debugging and optimizing. Frustratingly, his attempts consistently broke. There was no strong session management or self‑improving memory; his workflows couldn’t reliably learn standards or design decisions over time. 

He's not the only one frustrated with work messaging. In circles with high agent usage, teams are “crashing out” over Slack, saying it “blows out context windows.” 
 
When I asked why the current software tooling didn't feel fit for purpose, Alex answered: "If I needed single player AI agent experiences, it would be pretty easy to achieve. But I have so many processes that are collaborative — they are impossible or very frustrating to set up in Slack.”

Soon after that first call, he became one of Ando's first alpha users. Last week, 100% of tickets created and closed by his engineering team flowed through Ando. 

In a week, he plans to move his entire team off Slack.

He is convinced that Ando’s distinctive worldview on context is one that sets it up to fully support embedded agent workflows.

On the surface, Ando looks like a familiar messaging platform — threads, channels, direct messages. But every chat and spoken word on a call is natively captured, transcribed, and indexed alongside everything typed. Jams are Ando's version of Slack huddles: embedded audio and video sessions named after the fluid, generative sessions in music. Users can clip messages from different threads to assemble context for an agent, the way you might pull quotes from different chapters of a book to build an argument.

The result, in practice, is that the raw conversation of a team becomes material agents can act on in real time. Mid-conversation, ask an agent to look at an attribute in a database, or direct its attention to a task at hand and it’ll start working. When humans engage in heated debate, an agent might proactively act as an arbitrator, bringing deeply researched content with custom suggestions.

In Ando, Truth Systems’ engineers hop on jams together and talk through major architectural decisions, calling out areas for the agents to investigate and help make decisions on. After the jams, agents use  the call transcript, previous gold-standard tickets, the codebase, and connected Linear history to draw up multipage, implementation-ready tickets, detailed enough that Claude Code or another coding agent can one-shot the implementation from it, saving Truth Systems hours of manual context assembly.

"Ando has all the context in the channel, in conversations, in the calls. It has the self improving context layer. And you can see it! You can really actually see the model understand the design decisions we make better."
Alex dreams about what the future might look like living with agents. A proactive system or a reactive one? A strategic planner or a task completer? Whatever it becomes, he thinks, the interaction design matters just as much as raw model capability.

Imagine if you never had to open another tool at work. On a messaging platform, you talk through a problem with your team, brainstorm creatively, share references. The agents understand intent and handle everything downstream. Ando’s stated goal is to be one of the "last pieces of human-facing software."

## Making conversations ‘ergonomic for agents’

In 1945, before the rise of the personal computer, Vannevar Bush wrote a seminal essay, As We May Think, where he described the human race standing on the precipice of an “enormous mass of the common record” — a rapidly growing archive of books, scientific papers, technical reports, and photographs. He imagined an entirely new profession would emerge, what he called a trailblazer, who would roam and establish “useful trails” between items.

It was remarkably prescient about the internet age. Our current common record has exploded into email, Slack, Google Docs, Notion pages, tickets, dashboards, and the open web. We are still searching for ways to navigate through an immense trove of context.

There is no shortage of hard engineering problems cropping up at Ando that sit at the intersection of engineering and linguistics. 

The first is how to make raw conversations – what Ando calls chatter – useful to an agent. The casual, unstructured conversations people have at work through messages and calls is where most of the team's thinking actually lives. Making sense of that mess is where Ando spends their product energy.

Chatter resists easy parsing. Time horizons on which organizations tend to operate, think, and converse differ greatly. A nurse staffing agency talks about shifts and hourly coverage; a software team talks about shipping on two-week sprint cycles. Dialogue comes in chats, nested threads, and calls. And individual style varies wildly. Some people write in concise, sharp sentences. Others are prone to online soliloquies. Conversations decay and contradict themselves. A reply might reference something from five messages ago. You make decision A on Monday, change to B on Tuesday, revert to A on Wednesday. A platform that wants to extract useful reasoning from all of this has to capture an evolution in thinking.

The team geeks out over making all of this chatter and linguistic mass ‘ergonomic for agents.’ 

Jordan, an engineer on the team, tells me why. Philosophically, agents are “first class citizens,” indistinguishable from other coworkers, with shared member records, conversation memberships, and event systems. Ando’s engineering primitives let agents traverse context seamlessly.
One way they do this is through a heavy upfront lift on pre-labelling messages. The team will underplay it if you ask, but this was genuinely difficult to get right. 

Individual message retrieval failed early on. Oliver, a product contributor at Ando, tells me it took them months to be able to reference the entirety of a conversation. It was only after poring over linguistics research that they found the right conceptual frame. That concept became the foundation of custom conversational units. An agent now groups incoming messages into bundles and annotates them with specific labels, which makes retrieval significantly more accurate.

They compare it to Borges's Library of Babel — a universe containing every possible book, most of them gibberish, where accurate search is lossy and futile. The presence of a taxonomy or library catalog helps an agent find its way through.

## The bpm of human conversation, and language as product

Most of us spend more waking hours inside a messaging platform than inside any single room. The same way architecture shapes how we live, software shapes how we work and derive meaning. It is fitting that Ando is an homage to the Japanese architect Tadao Ando, whose work emerged from the urban fabric of post-war Osaka, known for his mastery of Ma, the Japanese concept of empty, negative space. In an interview, he stated his aim of architecture as “convert feelings into physical form.”

Inspired by his spiritual chapels and public buildings, an internal Ando principle is silence as a design value. One example: instead of notifying users for every single message, the team debates how best to collapse notifications so a user feels less at the whim of everyone else in the conversation stack.

I witnessed the same thoughtfulness applied to designing agent language and conversation. The Ando team is hyper aware of the "bpm of human conversation,” or how meaning is shaped by text length, specific word choice, cadence, and the interchange between participants. If an agent interjects at the wrong moment or in the wrong register, it is immediately unpleasant. After all, in a chat interface where you never see someone's face, words are the entire basis of understanding. The experience of the product is in the words.

Ernest Hemingway, the American novelist, is one of the Ando team’s internal references for how an agent's output should be read. His style is highly recognizable through his calm, extremely direct sentences. Ryan Haraki, a founding engineer at Ando, puts it as increased compression and precision, “endeavoring to say more with fewer words.” 

But they also need to adapt to user preferences for language. Some readers prefer Hemingway; others prefer Marquez. The question the Ando team is trying to answer is how to make that experience feel tasteful to the specific human receiving it.

What is it like to be on the team building all this? 

More playful than you would expect from people building enterprise communication software. 

One member joined as a “cracked anon designer” and worked with the team for months before doing a face reveal. Through Jordan, I learned some lingo to add to my dictionary. “Putting the fries in the bag” meant “stop talking and just ship.” One day I walked into the office to find the engineers tinkering with a receipt printer, trying to spit out physical tickets for the team. It broke, and printed a mile-long receipt containing the entire codebase. Scroll far enough into Sara’s pristine LinkedIn, and you’ll find her #1 endorsed skill is ‘memes.’ 

The lightness of ego sits next to the seriousness of the work. Customers tell me they are “Buddhist-like” and “zen,” and in the same sentence talk about the trust built by “extreme velocity.”

It is clear to me that their competitive advantage is how much fun they are having. If they took themselves too seriously, they would just end up building Teams again. A mixture of fastidiousness and romanticism gives the team the boldness to rebuild work communication from the ground up. 

Sara knows it is still early. "It’s humbling to study architects' careers, because you usually don’t get any recognition during the decades you're building it.” She tells me as we walk around the  Transamerica Pyramid. “People are annoyed by the construction and the scaffolding. But then when it’s done they post it all over Instagram and forget the journey there.”
But I don’t doubt she’ll keep building anyway. Even when the work ahead is long and the scaffolding is ugly, she holds the image of the monument in her mind.

If you liked this piece and recognized yourself in it, Ando is hiring. Alpha customers are intensely using the product. DM Sara on here or here and let her know you’re coming from this piece.

I write independent field studies of ambitious early stage companies from a product-centric, deeply personal lens. If you want to chat, you can find me here or email me here. 

