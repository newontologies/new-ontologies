---
layout: ../../layouts/Post.astro
title: "Ando: Building Slack from Scratch"
subtitle: "work messaging for agent-human collaboration"
date: 2026-04-21
tag: company building, future of work
image: /images/andoposter2.png
---
![Team Picture](/images/teampic.jpg)
It's Friday night in San Francisco, and engineers are leaving parties early to work with their AI agents. Call an agent over the phone, and lifelike voices respond. On custom extra-long curved monitors, six agents run across different terminal windows, all in view. San Francisco is a boomtown, a place where the future announces itself first as restlessness, as the anxiety of moving too slowly.

"The best human coworkers surprise you," Sara Du, the CEO of Ando, tells me. “They're proactive, they stew on things overnight and send you interesting thoughts in the morning. Why can’t agents be like that too?”

Sara and the Ando team are building for this emerging frontier of work, a new messaging platform enabling agents to work alongside humans as true teammates, not bots. Instead of retrofitting onto old chat paradigms, they rebuilt messaging designed around agents from the very start.

![Ben Lang Slack](/images/Ben-Lang.png)
Ando has been quiet since inception. No funding announcement, no publicly accessible product, no launch party. It feels very David and Goliath — a small crew of obsessive builders going up against Slack and Microsoft Teams, who have dominated the space for over a decade. 

When I first heard about the concept, the vision seemed intractably difficult. Replacing products of sheer ubiquity is its own challenge. Most of us have spent our entire professional lives inside Slack or Teams. As I write this, you might already hear the anxiety-inducing rattle-knock sound, a phantom message in your head. The other prevailing narrative is that foundation models will absorb everything and reduce applications to thin wrappers. 

Yet underneath my initial skepticism, I felt drawn to Ando's opposing argument: that interfaces will continue to matter, and that the feelings a platform evokes are a real and enduring form of defensibility. 

I spent a few weeks with the team as part of what I call an “independent field study” to understand the wager firsthand. 

When I first visited the Ando office, tucked into a corner of Jackson Square among the institutional red brick, it was awash in soft morning light. A large oak was a shock of green through the window. On the ledge by the desks next to the Yerba Mate stash and supplements stack was a chess board with pawns mid-move. The engineers told me they were playing one long, perpetual game. 

If you met them, I suspect you would want this quirky, motley crew to win.
![chessboard](/images/chessboard.jpg)

## Sara Du: design at the human layer
![Sara in front of Transamerica](/images/sara_bw.jpg)
I first met Sara at a wood paneled tea house on Kearny Street. Her voice sat just below the ambient noise of the room. Beneath her calm demeanor, I sensed a quiet intensity. As I got to know her over a few weeks I realized: peel back a layer of polish and you’d find a deep restlessness beneath. 

Ando is her second company. She founded her first, Alloy Automation, when she was 19. "Back then, I had a huge chip on my shoulder," she reflects. "Pure raw energy. I wanted to apply myself to just winning at something."

"And now?" I asked her.

"I realized there are other things that motivate me more, like building software that people touch and feel every day."

Sara grew up in Georgia to non-entrepreneurial parents, a system engineer and hospital worker. Their lives followed a steady procession from graduate school to a settled life in the suburbs two hours north of Atlanta. Far enough that you could watch the moon rise over the pines, a gleaming dome of light, and see nothing else for miles. She spent a lot of time alone.

Though the quietness was peaceful, the monotony was unbearable. A safe life could only end in disappointment, she thought. A risky one could end in failure, but it could also be the only kind of life worth living. When she taught herself to code and started posting projects online, the internet became the first place that felt full of possibility. Friends from Twitter convinced her to buy a one-way ticket for SF, where she couchsurfed through hacker houses scattered across farflung parts of the city. RX Bars constituted entire meals because the kitchens were filthy, and she didn't know how to cook. Like any frugal student she meticulously tracked her Uber Share rides and meals on a spreadsheet, capturing expenses down to the dollar. 

"I still have that spreadsheet," she tells me. "I look at it every year to remind myself I was making a big deal out of spending a few hundred dollars in a few months."
![image of spreadsheet](/images/budget.png)
She lasted a year at Harvard before the inevitable pull back to San Francisco. But she wouldn't recommend skipping college altogether. Freshman year was "valuable to get properly socialized."

California has always been a gold rush town. “A place in which a boom mentality and a sense of Chekhovian loss meet in uneasy suspension,” Joan Didion wrote of the state in her essay collection Slouching Towards Bethlehem in the 1960s, “Things had better work out here, because here, beneath that immense bleached sky, is where we run out of continent.” 

You’d have to succeed here, for there was no further West to go. 

San Francisco was the antithesis of Boston's ivory tower intellectualism. It didn't have any rules in comparison. It was here, somewhere between SoMa and Mission Bay, that she started Alloy Automation, an API integration platform for enterprises. The company raised $27M from a16z, Bain, and Shopify and rode the ecommerce boom of 2020.

The decision to start a new company last year came in the spirit of truth seeking. "I willed myself into being good at things that I'm just naturally not great at," she reflects in hindsight. “Good and great are so different.” She wanted to re-orient herself toward what she realized she was naturally skilled at, and called it a founder’s duty to match herself to the right market and problem where she could lead her team to massive success.

At Alloy, she had been playing a game where she didn't feel she had as many "cheat codes." Though by background an engineer, she eventually discovered her latent talent for design and marketing. She describes design as craft that goes beyond visual aesthetics, into the amorphous and hard-to-measure feel of using a product, from the naming of features and cadence of notifications, to spending hours inside of the data model. Design at the human layer matters most when the company you're building has to be adopted and loved by consumers. 

Her story reminded me of a Greek term I like, <i>techne</i>, which means <i>craft grounded in practice</i>. A founder builds a particular shape of company out of their techne, meaning the specific skills and obsessions they bring to the work. 
"Agency is often a result of system design," Sofia Dolfe, an early investor in Ando from Index Ventures, tells me. Fusing broader cultural and design references with product sense can set the foundation for a new social contract between humans and agents.

Spend time with Sara and you'll pick up that she is constitutionally unable to care less. Sweating the small details is a personal standard that shows up everywhere, even beyond the product. Over the weeks, sitting on the togo couch in the corner, I watched the mauve limewash go up and the wood panelling brought in. She was very opinionated that the office design should be calm and studio-like to inspire creativity.
![lamp](/images/lamp.jpg)
The same instinct shows up in how she runs the team. For example, in her free time she built an internal tool that gives everyone visibility into each other’s prompts and model traces. At most companies, how you talk to an AI is private, a little embarrassing even, the way search history is embarrassing. At Ando, prompting is a craft that you have a responsibility to help your colleagues get better at. All of it boils down to a central kernel of care. The texture of how people work together, down to the sentences they type into a model, is something a company can shape purposefully.

## What does Ando do?
![Ryan in front of window](/images/ryan.jpg)

It was 2am in Warsaw when Alex Mac of [Truth Systems](https://www.truthsystems.ai/) hopped on a call with the Ando team. Alex was spending an inordinate time building customized workflows on top of Slack for his engineers. He stayed up into the early hours of Christmas and New Year’s morning debugging and optimizing. Frustratingly, his attempts consistently broke. There was no strong session management or self‑improving memory; his workflows couldn’t reliably learn standards or design decisions over time. 

He's not the only one frustrated with work messaging. In circles with high agent usage, teams are “crashing out” over Slack, [saying](https://x.com/scottastevenson/status/2045939727056904299?s=20) it “blows out context windows.” 
![crashout](/images/Ando_Screenshot.png)
When I asked why the current software tooling didn't feel fit for purpose, Alex answered: "If I needed single player AI agent experiences, it would be pretty easy to achieve. But I have so many processes that are collaborative — they are impossible or very frustrating to set up in Slack.”

Soon after that first call, he became one of Ando's first alpha users. Last week, 100% of tickets created and closed by his engineering team flowed through Ando. 

In a week, he plans to move his entire team off Slack.

He is convinced that Ando’s distinctive worldview on context is one that sets it up to fully support embedded agent workflows.

On the surface, Ando looks like a familiar messaging platform — threads, channels, direct messages. But every chat and spoken word on a call is natively captured, transcribed, and indexed alongside everything typed. Jams are Ando's version of Slack huddles: embedded audio and video sessions named after the fluid, generative sessions in music. Users can clip messages from different threads to assemble context for an agent, the way you might pull quotes from different chapters of a book to build an argument.
![Sara at computer](/images/Sara_Computer.jpg)
The result, in practice, is that the raw conversation of a team becomes material agents can act on in real time. Mid-conversation, ask an agent to look at an attribute in a database, or direct its attention to a task at hand and it’ll start working. When humans engage in heated debate, an agent might proactively act as an arbitrator, bringing deeply researched content with custom suggestions.

In Ando, Truth Systems’ engineers hop on jams together and talk through major architectural decisions, calling out areas for the agents to investigate and help make decisions on. After the jams, agents use the call transcript, previous gold-standard tickets, the codebase, and connected Linear history to draw up multipage, implementation-ready tickets, detailed enough that Claude Code or another coding agent can one-shot the implementation from it. It saves Truth Systems hours of manual context assembly.

>"Ando has all the context in the channel, in conversations, in the calls. It has the self improving context layer. And you can see it! You can really actually see the model understand the design decisions we make better."

Alex dreams about what the future might look like living with agents. A proactive system or a reactive one? A strategic planner or a task completer? Whatever it becomes, he thinks, the interface for humans matters just as much as raw model capability.

## Making conversations ‘ergonomic for agents’

In 1945, before the rise of the personal computer, Vannevar Bush wrote a seminal essay, [As We May Think](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/), where he described the human race standing on the precipice of an <i>enormous mass of the common record</i> — a rapidly growing archive of books, scientific papers, technical reports, and photographs. He imagined an entirely new profession would emerge, what he called a trailblazer, who would roam and establish “useful trails” between items.

It was remarkably prescient about the internet age. Our current common record has exploded into email, Slack, Google Docs, Notion pages, tickets, dashboards, and the open web. We are still searching for ways to navigate through an immense trove of context.

Ando is working on one version of that problem, sitting at the intersection of engineering and linguistics. How do you make <i>chatter</i>, the raw unstructured conversations people have at work, useful to an agent? Making sense of that mess is where the team spends its product energy.

This is the part they find genuinely fun. The team geeks out over making this linguistic mass <i>ergonomic for agents.</i>
![jordanoliver](/images/jordanoliver.jpg)
Chatter resists easy parsing. Time horizons on which organizations tend to operate, think, and converse differ greatly. A nurse staffing agency talks about shifts and hourly coverage; a software team talks about shipping on two-week sprint cycles. Dialogue comes in chats, nested threads, and calls. And individual style varies wildly. Some people write in concise, sharp sentences. Others are prone to online soliloquies. Conversations decay and contradict themselves. A reply might reference something from five messages ago. You make decision A on Monday, change to B on Tuesday, revert to A on Wednesday. A platform that wants to extract useful reasoning from all of this has to capture an evolution in thinking.

Jordan, an engineer on the team, tells me that agents are treated as “first class citizens,” indistinguishable from other coworkers. Ando’s product primitives allow agents to traverse context seamlessly and take the same actions humans can.

One way they do this is through a heavy upfront lift on pre-labelling messages. They compare it to Borges's Library of Babel — a universe containing every possible book, most of them gibberish, where accurate search is lossy and futile. The presence of a taxonomy or library catalog helps an agent find its way through.

The team will underplay it if you ask, but this was genuinely difficult to get right. Individual message retrieval failed early on. Oliver, a product contributor at Ando, tells me about poring over linguistics research until they found the right conceptual frame. That concept became the foundation of custom conversational units. An agent now groups incoming messages into bundles and annotates them with specific labels, which makes retrieval significantly more accurate.

## The bpm of human conversation

The other goal they progress toward is making work communications <i>feel different</i> - less notification hell, more calm and groundededness daily.

Most of us spend more waking hours inside a messaging platform than inside any single room. The same way architecture shapes how we live, software shapes how we work and derive meaning. It is fitting that Ando is an homage to the Japanese architect Tadao Ando, [known](https://www.wallpaper.com/architecture/tadao-ando) for his mastery of <i>Ma</i>, the Japanese concept of empty, negative space. 

Inspired by his spiritual chapels and public buildings, the company adopted <i>silence as a design value</i>. One example: instead of notifying users for every single message, they debate how best to collapse notifications so a user feels less at the whim of everyone else in the conversation stack.

The same thoughtfulness is applied to designing agent language and conversation. The Ando team thinks carefully about the "bpm of human conversation,” the way meaning is shaped by text length, word choice, cadence, and interchange between participants. If an agent interjects at the wrong moment or in the wrong register, it is immediately unpleasant. After all, in a chat interface where you never see someone's face, words are the entire basis of understanding and experience.

Hemingway, the American novelist, is one of the Ando team’s internal references for how an agent's output should be read. His style is recognizable for its calm, direct sentences. Ryan Haraki, a founding engineer at Ando, calls this compression and precision, or "endeavoring to say more with fewer words."

Eventually, agents will have to adapt to individual preferences for language. Some readers prefer Hemingway; others prefer Marquez. The question the Ando team is trying to answer is how to make that experience feel tasteful to the specific human receiving it.

What is it like to be on the team building all this? 

More playful than you would expect from people building enterprise communication software. 
![team on couch](/images/teamcouch.jpg)
One member joined as a “cracked anon designer” and worked with the team for months before doing a face reveal. Through Jordan, I learned some lingo to add to my dictionary. “Putting the fries in the bag” meant “stop talking and just ship.” One day I walked into the office to find the engineers tinkering with a receipt printer, trying to spit out physical tickets for the team. It broke, and printed a mile-long receipt containing the entire codebase. Scroll far enough into Sara’s pristine LinkedIn, and you’ll find her #1 endorsed skill is ‘memes.’ 

The lightness of ego sits next to the seriousness of the work. Customers describe the team as “Buddhist-like” and “zen,” and in the same sentence talk about the trust built by “extreme velocity.”

Their real competitive advantage might be how much fun they are having. 
![zest](/images/zest.jpg)
If they took themselves too seriously, they would just end up building Teams again. A mixture of fastidiousness and romanticism gives the team the boldness to rebuild work communication from the ground up. 

Sara knows it is still early. "It’s humbling to study architects' careers, because you usually don’t get any recognition during the decades you're building it.” She tells me as we walk around the  Transamerica Pyramid. “People are annoyed by the construction and the scaffolding. But then when it’s done they post it all over Instagram and forget the journey there.”

I don’t doubt she’ll keep building anyway, even when the work ahead is long and the scaffolding is ugly. She holds the image of the monument in her mind.
![transamerica](/images/transamerica.jpg)
## contact
If you liked this piece and recognized yourself in it, Ando is hiring. Alpha customers are intensely using the product. DM Sara on [here](https://x.com/saradu) or [here](https://www.linkedin.com/in/saradu/) and let her know you’re coming from this piece.

![screenshot](/images/screenshot.png)

I write field studies of early-stage companies. Product and idea-led, but personal in voice. If you want to chat, you can find me [here](https://x.com/startingfromnix) or email me [here](startingfromnix@gmail.com). 

![saranicole](/images/saranicole.jpg)
<i>see Sara and I in the midst of a long conversation about linguistics</i>

