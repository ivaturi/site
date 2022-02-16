---
title: Docs for developers (WTD discussion)
date: 2022-02-16
tags: posts
draft: yes
layout: blogpost.liquid
---

Read [this book](/blog/vault/dfd) with the [WTD book club](https://www.writethedocs.org/book-club/).

### Prompt

The section **Outline your users' needs** covers basic questions that all users have.  
Some are general: What is this product? Will it solve my problem?   Others are specific: How do I use your API/other feature? The authors assert that we should be identifying the answers to these questions through channels other than our own experience with the product. And that we generally know more about our product than our users, which means we're likely forgetting to document some very valuable info.

In the section **Validate your user understanding**, the authors look at methods useful for answering these questions:  

-   Use existing data sources, like support and marketing.
-   Gather new data by directly interacting with the users.

> _How do you get access to/share existing data (on your own, as a team, or as an entire organization)?_
> 
> _How do you get buy-in/make time for/actually plan and execute direct interviews, surveys, or other methods not covered in this section?_

### Discussion

* Oof. I get access to and share information by lurking in all the slack channels I can find, poking around in JIRA when I have the time, and watching confluence pages. But making time for the rest… in my current role that falls apart quite often due to time zones and the fact that I’m sprinting somewhat far behind the developers… so I’m conscious of the fact that any questions I have for them is going to draw them out of their current work, slow them down, and I might require a good amount of back and forth that doesn’t go very quickly asynchronously.(Also, thanks for this great prompt, Amoreen! I’d love to see separate posts for each question so that we can thread separately if it makes sense, but I’m not sure that it will for every prompt you have in mind)

* Like Sarah, I try to poke around in Jira and Salesforce, and occassionally talk to our customer support people (who are always super busy).
One thing I did realize as I got more proficient with the product is that... most of our internal people (like dev and QA) don't actually know how the product is ultimately used. That changed my point of view a bit and in some cases I do consider myself more of an "expert" than them, just because I had the drive (and time) to poke around and ask questions.
Before the pandemic, I also got to meet our users on a yearly basis - the first time, I was very much mind blown by how far away our understanding was from their actual needs. This ties into the second question as well - the meetings were 100% driven by the head of product management, who is a big believer in docs and supported us from day 1.

* Quick caveat: my tiny little startup was bought by a gigantic company a year ago so that's the frame of reference I'm coming from. I also work on a product with an open source component and a proprietary component. A few thoughts on how to gather user data and how we do it on our team.
If you're lucky enough to have a UX team like I do, they are one of the best possible source of information about user data for me. I do my best to make sure they know me, that they see me as a stakeholder in their work, and that they think to invite me when they are doing user research.
The other really awesome source of information for me is my sales enablement or professional services team. They are on the front lines experiencing what the customer's needs and frustrations are. Having regular opportunities to collaborate with them on content has been amazing. What we currently do is have a bi-weekly 1 hour sync where we talk about what they're seeing in the field and how we can develop documentation to support those needs. I'm so excited about the great content and product improvements that have come out of those syncs.
Lastly, since my product has an open source side, it's nice that I can actually talk to one segment of our users directly. I lightly monitor community forums (fora???) and try to keep a pulse on where people are struggling. I engage and talk to users directly where it seems like I could add value or where I want to understand their issues better. I also regularly talk to our support engineer who is responsible for monitoring those places and ask him what trends he is observing.
I'm also experimenting with a "docs roadmap" where I list out key documentation improvement initiatives I could work on and then record real votes when people give me feedback about what they'd like to see. It helps my prioritize my work: https://saltdocs.prodcamp.com/

### Prompt

The section **Condensing user research findings** covers how to make sure that info obtained from research isn't lost. The authors suggest user personas, user stories, and user journey maps

> How to implement these tools into the development–documentation loop?
> 
> At what point(s) are personas, stories, and/or maps used? Who are they available for? And who creates them?


### Discussion

* In my experience either product managers or business analysts create user stories (aka, use cases). These are given to the developers to focus on new features. Often developers consider a 'use case' as a starting point and expand from there. I've taken use cases to determine what topics to create and what to look for in features, but generally as a technical writer I don't actually use a 'use case'.  I might include a general reference to use cases (like a sentence or two or a phrase or two) in an introductory paragraph.


### Prompt

The authors then introduce how to create a friction log. Tbh this is a term I've never heard, though as a tech writer, it's a huge part of my experience! I write our docs through that perspective: What do I have questions about? What's hard for me to figure out? What got me frustrated?

> Curious if any one has created or used friction logs? If so, at what point(s) are logs used in the development–documentation loop? Who are they available for? And who creates them?

### Discussion

* The phrase "friction log" is like a lightbulb going off for me!