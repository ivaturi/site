---
title: Algorithms to live by
authors: 
    - Brian Christian
    - Tom Griffiths
fulltitle: Algorithms to live by - the computer science of human decisions
rating: 3
date: 2021-01
notes: no
---


**Optimal stopping, or when to stop looking**

- A class of problems that involve working through (committing to or foregoing) a series of successive options, like finding a parking spot, renting an apartment, selling a home, making a hiring choice, etc.
- Reframing the problem in terms of something that can be measured makes this a _threshold problem_
- In practice, we tend to stop looking earlier than we should, because of sunk costs (most often this is a time cost - the time spent looking for the right answer).
  
**Explore-exploit**

- Situations that involve trade-offs between exploiting the familiar and exploring the unknown; the problem of how to allocate resources to alternatives whose outcomes we don't fully know, but will realize over time (also called the *multi-armed bandit* problem).
- The gittins index aims to quantify the reward of each alternative, to make the decision easier.
- We tend to progress from being exploratory when young to exploitative when old; immersing ourselves within the familiar tends to improve our sense of well-being.