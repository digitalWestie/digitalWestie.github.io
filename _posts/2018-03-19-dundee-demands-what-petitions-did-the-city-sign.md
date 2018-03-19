---
layout: post
title: "Dundee Demands: What petitions did the city sign?"
date: 2018-03-19 11:45:00 +0000
tags: open-data,politics
---

This past weekend I attended the [Dundee public data hack](https://www.wittin.co.uk/index.php/dundee-public-data-hack/). The event coincided with the launch of the city's new [data portal](https://data.dundeecity.gov.uk/). Held at Abertay University, the hosts did a great job of creating a welcoming, creative environment. It was also refreshing to see a diverse crowd attending the hack too.

I mainly spent my time picking people's brains and chewing over the questions of what makes a [good open data initiative](http://localhost:4000/2018/03/05/achieving-engagement-and-impact-with-open-data.html). Taking a step back and playing observer generated some ideas that I'll need to feed into a [checklist of engagement best practices](https://github.com/digitalWestie/open-engagement/blob/master/OE-BEST-PRACTICE.md) I've been working on.

### Petition data

Aside from bothering people for my ulterior motives, I joined in by having a play around with data from the [parliament petition site](https://petition.parliament.uk/petitions?state=open). The site's petition data are made available via a JSON API and incldues signatures broken down by constituency. This is the data behind the [petition map](https://petitionmap.unboxedconsulting.com) you might have come across:

![Petition signatures mapped across the UK](/assets/images/petition-map.png){:class="img-responsive"}

{:.caption}
Petitions often generate counter-petitions. In this case a response to the ["Ban driven grouse shooting"](https://petition.parliament.uk/petitions/201443), Source: [UnboxedConsulting](https://petitionmap.unboxedconsulting.com)

Using the API I downloaded data for all the petitions created since the start of the 2017 government. For each petition I combined the Dundee East and West constituencies to create a single Dundee signature count. Dividing the Dundee count by the total gave a percentage for each petition. 

At the time there were 5,509 petitions. Some of them had no signatures in Dundee so I discounted these. I also discounted the petitions with less than 1000 signatures leaving a dataset of 268 petitions.

Below I've summarised and picked out some results I found interesting. You can also explore the [results in full](#the-results-in-full) for yourself. 


### Top petitions in Dundee

Independence and constitution-related petitions were the main issue for Dundee petition signers. At number one spot was "Allow Scotland to host a second referendum for Scottish Independence", with 51 signatures out of a total UK wide of 1072 signatures.

Number 2 and 3 were also constitutional: "Return Tax raising powers in Scotland to the UK Government" and "Return Scottish devolved powers to UK Government and Parliament".

The highest non-constitutional petition was #4: "Universal Credit applicants to receive adequate payments throughout assessment".

### Ban fireworks and legalise cannabis

I asked around about these two. It wasn't clear why these were high up. Perhaps there are a lot of easy-going dog lovers in Dundee? 

- 8: Ban the sale of fireworks to the public and have only licensed displays.
- 10: Legalise cannabis for medical and recreational use.

### WASPI Women and Electric cars

Another interesting two:

- 17: Make fair transitional state pension arrangements for 1950’s women
- 19: Make parking of ICE vehicles at EV charging points a more serious offence

I learnt the [WASPI pension equality campaign](https://en.wikipedia.org/wiki/Women_Against_State_Pension_Inequality) has a strong Dundee presence. I tink they'd appreciate seeing the impact of their efforts in the city.  

Likewise, Dundee has [a high number of electric vehicle users](http://www.bbc.co.uk/news/av/uk-scotland-39185122/dundee-leads-electric-car-revolution) and this local representation turns up in the petition.

### GCSE Martial arts and homework

Two of my favourites way at the other end of the scale:

- 218: Allow Martial Arts to be on the GCSE/A Level syllabus
- 266: Make homework voluntary for children

GCSEs aren't taken in Scotland, so it makes sense Dundee doesn't give a hoot. However, Scotland does have homework, and Dundee would like it to remain obligatory.

### Eyelash extensions regulation

Working with the data I came across a few niche petitions, particularly when I didn't filter out petitions with less than 1000 signatures:

- "Regulate the eyelash extension industry making training compulsory" with 663 signatures (4 from Dundee)
- "I would like the UK government to legally recognise polyamorous families" 115 signatures (2 from Dundee)

A rather blokey statement but I had no idea eyelash extensions could go so wrong.


### The results in full

<script src="https://gist.github.com/digitalWestie/774707a6f2e2ea5336186368dc5fbed6.js"></script>